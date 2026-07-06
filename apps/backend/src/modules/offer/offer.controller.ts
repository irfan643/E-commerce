import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Auth } from 'src/common/Guard/auth.decorator';
@Auth('SELLER')
@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('Create/:id')
  create(
    @Param('id') productId: string,
    @Body() createOfferDto: CreateOfferDto,
    @Req() req,
  ) {
    const userId = req.user.sub;
    return this.offerService.create(productId, userId, createOfferDto);
  }

  @Get('my_offers')
  findAll(@Req() req) {
    const sellerId = req.user.sub;
    return this.offerService.findAll(sellerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerService.findOne(id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateOfferDto: UpdateOfferDto,
    @Req() req,
  ) {
    const sellerId = req.user.sub;
    return this.offerService.update(id, sellerId, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    const sellerId = req.user.sub;
    return this.offerService.remove(id, sellerId);
  }
}
