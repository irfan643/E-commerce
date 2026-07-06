import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
