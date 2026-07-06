import { User } from '@/../../packages/db/generated/prisma';

export interface RoleStrategy {
  handler(user: User, data?: any | null): Promise<any>;
  profile(userId: number): Promise<any>;
}
