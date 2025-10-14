import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './modules/Auth/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './modules/mail/mail.module';
@Module({

  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule,MailModule ,PrismaModule],

})
export class AppModule {}
