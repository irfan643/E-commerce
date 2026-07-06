import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RolesModule } from './CreateUser/roles.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [RolesModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
