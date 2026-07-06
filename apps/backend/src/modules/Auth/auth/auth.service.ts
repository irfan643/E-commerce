import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  Inject,
  ForbiddenException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/modules/User/dto/user.dto';
import { UserService } from 'src/modules/User/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../dto/login.dto';
import { MailerServiceCustom } from 'src/modules/Auth/mail/mail.service';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { updatepassword } from '../dto/password.dto';
import { Rolestrategyfactory } from 'src/modules/User/CreateUser/role-strategy.factory';
import { JwtPayload } from 'src/common/types/jwt_payload';
import { Role } from 'src/common/enum/Role';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../../../../../../packages/db/generated/prisma/index';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailerServiceCustom,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly rolestrategyfactory: Rolestrategyfactory,
    private readonly prisma: PrismaService,
  ) {}

  // ✅ Register new user
  async register(dto: CreateUserDto) {
    const role = dto.role;
    const existingUser = await this.userService.findByEmail(dto.email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    if (this.rolestrategyfactory.isPublicRole(role)) {
      const { verifyToken } = await this.mailService.sendOTP(dto.email);
      await this.cacheManager.set(`pending_user_${verifyToken}`, dto, 300000);
      return {
        status: 'success',
        message: 'OTP sent to your email',
        verifyToken,
      };
    }
    throw new BadRequestException(`Cannot register with public role: ${role}`);
  }
  async internalRegister(dto: CreateUserDto, createdBy: JwtPayload) {
    if (dto.role === createdBy.role) {
      throw new ForbiddenException('NOT CREATE OTHER ADMIN create admins');
    }
    console.log('Internal Register by:', createdBy.email);
    console.log('Creating user with role:', dto.role);
    const existingUser = await this.userService.findByEmail(dto.email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const admin = await this.userService.findById(createdBy.sub);
    if (!admin) throw new UnauthorizedException('Invalid user context');

    // Check role permission
    // ---- ROLE CHECKING ----
    if (admin.role === Role.ADMIN) {
      // admin can create everything -> OK
    } else if (admin.role === Role.HUB) {
      // hub can only create drive role
      if (dto.role !== Role.DRIVER) {
        throw new ForbiddenException('Hub can only create DRIVE users');
      }
    } else {
      // all other roles: no permission
      throw new ForbiddenException('You are not allowed to create users');
    }
    const user = await this.userService.Createuser(dto);
    return { status: 'success', message: 'User created', user };
  }

  async verifyRegistration(token: string, otp: string) {
    const otpCheck = await this.mailService.verifyOtp(token, otp);
    if (otpCheck.status !== 'success') {
      return { status: 'error', message: 'Invalid or expired OTP' };
    }

    const dto = await this.cacheManager.get<CreateUserDto>(
      `pending_user_${token}`,
    );
    if (!dto) return { status: 'error', message: 'User data expired' };

    const user = await this.userService.Createuser(dto);

    await this.cacheManager.del(`pending_user_${token}`);
    return { status: 'success', message: 'User created', user };
  }

  // ✅ Login existing user
  async login(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload: any = { sub: user.id, email: user.email, role: user.role };

    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    await this.userService.saveRefreshToken(user.id, refreshToken);
    return {
      status: 'success',
      message: 'Login successful',
      access_token: token,
      refresh_token: refreshToken,
      user,
    };
  }
  // ✅ Logout
  async logout(userId: number) {
    await this.userService.removeRefreshToken(userId);
    return 'Logout successful';
  }
  // ✅ Request password update with OTP
  async requestPasswordUpdate(password: updatepassword) {
    const user = await this.userService.findByEmail(password.email);
    if (!user) {
      throw new UnauthorizedException('Email not found');
    }

    // Send OTP first
    const { verifyToken } = await this.mailService.sendOTP(password.email);

    // Store the pending password update in cache ()
    await this.cacheManager.set(
      `pending_password_${verifyToken}`,
      { email: password.email, password: password.password },
      300000,
    );

    return {
      status: 'pending',
      message: 'OTP sent to your email. Please verify to update password.',
      verifyToken,
    };
  }

  // ✅ Verify OTP and update password
  async verifyAndUpdatePassword(token: string, otp: string) {
    const otpCheck = await this.mailService.verifyOtp(token, otp);
    if (otpCheck.status !== 'success') {
      throw new UnauthorizedException('Invalid or expired dkm,dms.d OTP');
    }

    // Get the pending password data from cache
    const pendingData = await this.cacheManager.get<{
      email: string;
      password: string;
    }>(`pending_password_${token}`);

    if (!pendingData) {
      throw new UnauthorizedException(
        'Password update request expired or not found',
      );
    }

    const { email, password } = pendingData;

    // Verify user still exists
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Now update the password in database
    const updatepassword = await this.userService.Passwordupdate(
      password, // Already hashed
      email,
    );

    // Clean up cache
    await this.cacheManager.del(`pending_password_${token}`);

    return {
      status: 'success',
      message: 'Password updated successfully',
      user: updatepassword,
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      // Verify refresh token signature and expiration
      const payload: any = this.jwtService.verify(refreshToken);

      // Get user from DB
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: { id: true, email: true, role: true, refreshToken: true },
      });

      if (!user || !user.refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Compare hashed refresh token
      const isValid = await bcrypt.compare(refreshToken, user.refreshToken);
      if (!isValid) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Issue new access token
      const newAccessToken = this.jwtService.sign(
        { sub: user.id, email: user.email, role: user.role },
        { expiresIn: '15m' },
      );

      // Optional: rotate refresh token
      // const newRefreshToken = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role }, { expiresIn: '7d' });
      // await this.prisma.user.update({ where: { id: user.id }, data: { refreshToken: await bcrypt.hash(newRefreshToken, 10) } });

      return { accessToken: newAccessToken };
    } catch (e) {
      throw new UnauthorizedException('Refresh token expired or invalid');
    }
  }
}
