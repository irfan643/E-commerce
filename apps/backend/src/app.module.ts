import { Module, Global } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { CacheModule } from '@nestjs/cache-manager';
import { FeatureModule } from './modules/FeatureModule.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
    }),

    CacheModule.register({
      isGlobal: true,
      ttl: 300000,
    }),
    FeatureModule,
    PrismaModule,
  ],
})
export class AppModule {}
