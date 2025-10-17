import { Module, Global } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './modules/Auth/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './modules/mail/mail.module';
import { CacheModule } from '@nestjs/cache-manager';
@Module({

  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }),

  CacheModule.register(
    {
 isGlobal: true,
  ttl: 300000, 
    }
  ),
   AuthModule,MailModule ,PrismaModule],

})
export class AppModule {}
