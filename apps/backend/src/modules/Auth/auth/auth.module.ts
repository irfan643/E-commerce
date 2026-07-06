import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '../../User/user.module';
import { MailModule } from 'src/modules/Auth/mail/mail.module';
import { RolesModule } from 'src/modules/User/CreateUser/roles.module';
import { AuthGuard } from 'src/common/Guard/JwtGurad';
@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3d' },
      }),
    }),
    UserModule,
    MailModule,
    RolesModule,
  ],
  exports: [AuthService, JwtModule, AuthGuard],
})
export class AuthModule {}
