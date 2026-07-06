import { Module } from '@nestjs/common';
import { Rolestrategyfactory } from './role-strategy.factory';
import { Customerstratrgy } from './customer.strategy';
import { Sellerstratrgy } from './seller.strategy';
import { Driverstratrgy } from './driver.strategys';
import { Hubstratrgy } from './hub.strategy';

@Module({
  providers: [
    Rolestrategyfactory,
    Customerstratrgy,
    Sellerstratrgy,
    Driverstratrgy,
    Hubstratrgy,
  ],
  exports: [Rolestrategyfactory],
})
export class RolesModule {}
