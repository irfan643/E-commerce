import { Body, Controller, Post } from '@nestjs/common';
import { MailerServiceCustom } from './mail.service';

@Controller('mail')
export class MailerController {
  constructor(private readonly mailerService: MailerServiceCustom) {}

  @Post('test')
  opt(@Body('mail') mail: string) {
    return this.mailerService.sendOTP(mail);
  }
}
