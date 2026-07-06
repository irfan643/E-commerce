import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { MailerController } from './mail.controller';
import { MailerServiceCustom } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: () => {
        return {
          transport: {
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // Gmail → false for port 587
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          },
          defaults: {
            from: '"ConnectCart" <no-reply@connectcart.com>',
          },
        };
      },
    }),
  ],
  providers: [MailerServiceCustom],
  exports: [MailerServiceCustom],
})
export class MailModule {}
