import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as nodemailer from 'nodemailer';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class MailerServiceCustom {
  constructor(private readonly mailerService: MailerService) {}

 async generateOtp(length = 6): Promise<string> {
    return crypto.randomInt(10 ** (length - 1), 10 ** length).toString();
  }
  async sendOTP(mail:string){
        //    const opt = await this.generateOtp
        //    const opt= await  bcrypt.h
    const info = await this.mailerService.sendMail({
      to: mail,
      subject: 'Test Email from ConnectCart',
      text: `this is out otp dkslksldsas`,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log('📧 Email sent! Preview URL:', previewUrl);
    return { message: 'Email sent successfully!', previewUrl };
    
  
  }

 
    
}
