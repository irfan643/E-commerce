import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../User/dto/user.dto';
import { Public } from 'src/common/Decorator/public.decorator';
import { Auth } from 'src/common/Guard/auth.decorator';
import { LoginDto } from '../dto/login.dto';
import { MailerServiceCustom } from 'src/modules/mail/mail.service';
import { updatepassword } from '../dto/password.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService,
    private readonly   mailerservice: MailerServiceCustom
  ) {}
  @Public()
  @Post('login')
  login(@Body() User: LoginDto) {
    return this.AuthService.login(User);
  }
  @Public()
  @Post('register')
  register(@Body() dto: CreateUserDto) {
    console.log('🔥 Received register request:', dto);
    return this.AuthService.register(dto);
  }


   @Public()
  @Post('verify')
  verify(@Body() body: {tokken:string,otp:string}) {
      const{tokken,otp}=body;
     
    return this.AuthService.verifyRegistration(tokken,otp);
     
  }
  @Auth()
  @Post('update_password')
  updatePassword(@Body() userInfo:updatepassword) {
    
    return this.AuthService.requestPasswordUpdate(userInfo)
  }
@Auth()
@Post('verify-password-update')
async verifyPasswordUpdate(@Body() body: { token: string; otp: string }) {
  const { token, otp } = body;
  return await this.AuthService.verifyAndUpdatePassword(token, otp);
}


}
