import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@/../../packages/db/generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('🛑 Prisma disconnected');
  }

  // ✅ For Prisma v5+, use process hooks instead of this.$on('beforeExit')
  enableShutdownHooks(app: any) {
    process.on('beforeExit', async () => {
      console.log('🧹 Shutting down gracefully...');
      await app.close();
    });
  }
}
