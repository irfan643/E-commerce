import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/common/enum/Role';

const prisma = new PrismaService();

export async function findById(userId: number, table: string) {
  return prisma[table].findUnique({
    where: { userId },
    select: { id: true },
  });
}

export async function findid(userId: number, table: string) {
  const user = await prisma[table].findUnique({
    where: { userId },
  });
  if (!user) {
    throw new NotFoundException('User not found');
  }

  return user;
}
