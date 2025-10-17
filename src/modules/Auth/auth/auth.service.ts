import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/modules/User/dto/user.dto';
import { UserService } from 'src/modules/User/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../dto/login.dto';
import { MailerServiceCustom } from 'src/modules/mail/mail.service';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { updatepassword } from '../dto/password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailerServiceCustom,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  // ✅ Register new user
  async register(dto: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(dto.email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const { verifyToken } = await this.mailService.sendOTP(dto.email);
    await this.cacheManager.set(`pending_user_${verifyToken}`, dto, 300000);
    return {
      status: 'success',
      message: 'OTP sent to your email',
      verifyToken,
    };
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

    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);

    return {
      status: 'success',
      message: 'Login successful',
      access_token: token,
      user,
    };
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
    // First verify the OTP
    // console.log({token,otp})
    // console.log( await this.cacheManager.get( `pending_password_${token} ` ));
    //    const hashOpt = await this.cacheManager.get<string>(`otp_${token}`);
    //       console.log(`${hashOpt} opthash`)
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
}
