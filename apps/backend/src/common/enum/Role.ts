// src/common/enums/role.enum.ts
import { Role as PrismaRole } from '@/../../packages/db/generated/prisma';

export const Role = {
  SELLER: PrismaRole.SELLER,
  CUSTOMER: PrismaRole.CUSTOMER,
  DRIVER: PrismaRole.DRIVER,
  HUB: PrismaRole.Hub,
  ADMIN: PrismaRole.ADMIN,
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const PUBLIC_ROLES: Role[] = [Role.CUSTOMER, Role.SELLER];
