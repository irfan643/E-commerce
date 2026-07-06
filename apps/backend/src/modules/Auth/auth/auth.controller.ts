import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../User/dto/user.dto';
import { Public } from 'src/common/Decorator/public.decorator';
import { Auth } from 'src/common/Guard/auth.decorator';
import { LoginDto } from '../dto/login.dto';
import { MailerServiceCustom } from 'src/modules/Auth/mail/mail.service';
import { updatepassword } from '../dto/password.dto';
import { Role } from 'src/common/enum/Role';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly AuthService: AuthService,
    private readonly mailerservice: MailerServiceCustom,
  ) {}

  //login
  @Public()
  @Post('login')
  login(@Body() User: LoginDto) {
    return this.AuthService.login(User);
  }

  @Auth() // no roles → only JWT guard is applied
  @Post('logout')
  async logout(@Req() req) {
    console.log(req.user); // this works if JWT valid
    return this.AuthService.logout(req.user.sub);
  }

  @Post('refresh')
  refresh(@Req() req) {
    const refreshToken = req.cookies['refreshToken'];
    return this.AuthService.refreshToken(refreshToken);
  }

  @Public()
  //publice register
  @Post('register')
  register(@Body() dto: CreateUserDto) {
    console.log('🔥 Received register request:', dto);
    return this.AuthService.register(dto);
  }
  //internal register
  @Auth(Role.ADMIN, Role.HUB)
  @Post('internal-users')
  async createHub(@Body() dto: CreateUserDto, @Req() req) {
    console.log('🔥 Received internal register request by:', req.user.sub);
    return this.AuthService.internalRegister(dto, req.user);
  }

  @Public()
  //pulbic verify
  @Post('verify')
  verify(@Body() body: { tokken: string; otp: string }) {
    const { tokken, otp } = body;

    return this.AuthService.verifyRegistration(tokken, otp);
  }
  @Auth()
  //password update request
  @Post('update_password')
  updatePassword(@Body() userInfo: updatepassword) {
    return this.AuthService.requestPasswordUpdate(userInfo);
  }
  @Auth()
  //verify password update
  @Post('verify-password-update')
  async verifyPasswordUpdate(@Body() body: { token: string; otp: string }) {
    const { token, otp } = body;
    return await this.AuthService.verifyAndUpdatePassword(token, otp);
  }
}
