import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../User/dto/user.dto';
import { Public } from 'src/common/Decorator/public.decorator';
import { AuthGuard } from 'src/common/Guard/JwtGurad';
import { LoginDto } from '../dto/login.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}
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
@UseGuards(AuthGuard) 
@Post('update_password')
  
updatePassword(@Body()  userInfo: {email:string,password:string}) {
  const { email,password } = userInfo;
  return this.AuthService.updatePassword(email, password);
}}
