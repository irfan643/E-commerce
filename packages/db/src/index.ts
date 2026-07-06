import { PrismaClient } from '../generated/prisma';

export const prisma = new PrismaClient();

// Re-export types and enums for other packages
export * from '../generated/prisma';