import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth/auth.module';
import { ProductModule } from './product/product.module';
import { OfferModule } from './offer/offer.module';
@Module({
  imports: [AuthModule, ProductModule, OfferModule],
})
export class FeatureModule {}
