import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { findById } from 'src/utils/dbhelper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OfferService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    productid: string,
    userid: number,
    createOfferDto: CreateOfferDto,
  ) {
    const seller = await findById(userid, 'seller');
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    const sellerId = seller.id;

    const product = await this.prisma.product.findUnique({
      where: { id: productid },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Check if this seller already created an offer for this product
    const existingOffer = await this.prisma.offer.findFirst({
      where: {
        productId: productid,
        sellerId: sellerId,
      },
    });

    if (existingOffer) {
      throw new ForbiddenException(
        'You cannot create an offer because one has already been created by this seller for the product',
      );
    }

    // Create the offer
    const createdOffer = await this.prisma.offer.create({
      data: {
        ...createOfferDto,
        productId: productid,
        sellerId: sellerId,
      },
    });
    return createdOffer;
  }

  async findAll(userid: number) {
    const sellerId = await findById(userid, 'seller');
    if (!sellerId) {
      throw new NotFoundException('Seller not found');
    }
    return this.prisma.offer.findMany({
      where: { sellerId: sellerId.id },
      take: 2,
    });
  }

  async findOne(id: string) {
    const offer = await this.prisma.offer.findUnique({
      where: { id: id },
      include: { product: true },
    });
    if (!offer) {
      throw new NotFoundException('Offer not found');
    }
    return offer;
  }

  async update(
    offerId: string,
    userid: number,
    updateOfferDto: UpdateOfferDto,
  ) {
    const seller = await findById(userid, 'seller');
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    const sellerId = seller.id;

    const offer = await this.prisma.offer.findUnique({
      where: { id: offerId },
    });
    if (!offer) {
      throw new NotFoundException('Offer not found');
    }

    // Check if this seller already created an offer for this product
    const existingOffer = await this.prisma.offer.findFirst({
      where: {
        productId: offerId,
        sellerId: sellerId,
      },
    });

    if (existingOffer) {
      throw new ForbiddenException(
        'You cannot create an offer because one has already been created by this seller for the product',
      );
    }

    // update the offer
    const createdOffer = await this.prisma.offer.update({
      where: { id: offerId },
      data: {
        ...updateOfferDto,
      },
    });
    return createdOffer;
  }

  async remove(id: string, sellerId: string) {
    const offer = await this.prisma.offer.findUnique({
      where: { id },
      select: { sellerId: true },
    });
    const seller = await findById(parseInt(sellerId), 'seller');
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    if (!offer || offer.sellerId !== seller.id) {
      throw new ForbiddenException('You cannot delete this offer');
    }

    return this.prisma.offer.delete({ where: { id } });
  }
}
