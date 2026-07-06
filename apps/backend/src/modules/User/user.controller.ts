import {
  BadRequestException,
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Rolestrategyfactory } from './CreateUser/role-strategy.factory';
import { Auth } from 'src/common/Guard/auth.decorator';
@Controller('profile')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly rolestrategyfactory: Rolestrategyfactory,
  ) {}
  @Auth()
  @Get('me')
  async getProfile(@Req() req) {
    const { sub, role } = req.user;

    const strategy = this.rolestrategyfactory.getStrategy(role);

    if (!strategy.profile) {
      throw new BadRequestException('Profile not implemented for this role');
    }
    return strategy.profile(sub);
  }
}
