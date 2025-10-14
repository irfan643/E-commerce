import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerController } from './mail.controller';
import { MailerServiceCustom } from './mail.service';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: '"ConnectCart" <no-reply@connectcart.com>',
      },
    }),
  ],
  controllers: [MailerController],
  providers: [MailerServiceCustom],
  exports: [MailerServiceCustom],
})
export class MailModule {}
