import { PrismaService } from 'src/prisma/prisma.service';
import { RoleStrategy } from './role-strategy.interface';
import { Injectable } from '@nestjs/common';
import { User } from '@/../../../packages/db/generated/prisma';
@Injectable()
export class Hubstratrgy implements RoleStrategy {
  constructor(private readonly prisma: PrismaService) {}
  async handler(user: User): Promise<any> {
    return await this.prisma.hub.create({
      data: {
        userId: user.id,
      },
    });
  }
  profile(userId: number) {
    return this.prisma.hub.findUnique({ where: { userId } });
  }
}
