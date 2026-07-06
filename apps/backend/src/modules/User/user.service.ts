import { User } from '@/../../packages/db/generated/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/user.dto';
import { Rolestrategyfactory } from './CreateUser/role-strategy.factory';
// import { User } from './user.controller';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rolestrategyfactory: Rolestrategyfactory,
  ) {}

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    return user;
  }
  public async findById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });

    return user;
  }

  //create user
  public async Createuser(user: CreateUserDto) {
    console.log('=== START Createuser ===');
    console.log('Factory available:', !!this.rolestrategyfactory);

    const hashedPassword = await this.hashPassword(user.password);
    const role = user.role;

    const newUser = await this.prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        role: role,
      },
    });
    const strategy = this.rolestrategyfactory
      .getStrategy(newUser.role)
      .handler(newUser);
    return newUser;
  }
  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
  //passwordupdata
  public async Passwordupdate(password: string, email: string) {
    const hashedPassword = await this.hashPassword(password);
    const updatepassword = await this.prisma.user.update({
      where: { email: email },
      data: { password: hashedPassword },
    });
    const { password: _, ...userWithoutPassword } = updatepassword;
    return {
      status: 'success',
      message: 'Password updated successfully',
      user: userWithoutPassword,
    };
  }
  //refesh token
  async saveRefreshToken(userId: number, refreshToken: string) {
    const hashedToken = await bcrypt.hash(refreshToken, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashedToken },
    });
  }
  /// remove refesh token
  async removeRefreshToken(userId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }
}
