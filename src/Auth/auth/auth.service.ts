import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/User/dto/user.dto';
import { UserService } from 'src/User/user.service';
import * as bcrypt from 'bcrypt'; // for password hashing
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    
  ) {}

  // ✅ Register new user
          
  async register(dto: CreateUserDto) {
    const existingUser = await this.userService.findByEmail(dto.email);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const user = await this.userService.Createuser(dto);

    return {
      status: 'success',
      message: 'User registered successfully',
      user,
    };
  }

  // ✅ Login existing user
  async login(dto:LoginDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const password = user.password;

    if (!password) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(dto.password, password);
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
  // ✅ Update user password

  async updatePassword(email: string, newPassword: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('email notfound');
    }
    const updatepassword = await this.userService.Passwordupdate(
      newPassword,
      email,
    );
    return {
      status: 'success',
      message: 'Password updated successfully',
      user: updatepassword,
    };
  }
}
