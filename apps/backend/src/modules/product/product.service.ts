// ...existing code...
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateProductRequestDto,
  UpdateProductRequestDto,
} from './dto/createproduct.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findById } from 'src/utils/dbhelper';
import { Product, Offer } from '@/../../packages/db/generated/prisma';
import { OfferDto } from './dto/offer.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabase: SupabaseService,
  ) {}
  //create product with offer
  async createproduct(dto: CreateProductRequestDto, userid: number) {
    const seller = await findById(userid, 'seller');

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    const sellerId = seller.id;

    const { product, offer } = dto;

    const created = await this.prisma.product.create({
      data: {
        ...product,
        createdById: sellerId,
        offers: {
          create: {
            ...offer,
            sellerId: sellerId,
          },
        },
      },
      include: { offers: true },
    });

    return created;
  }

  //find my products
  async findMyProducts(userid: number) {
    const seller = await findById(userid, 'seller');
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }
    const sellerId = seller.id;
    return this.prisma.product.findMany({
      where: { createdById: sellerId },
      include: { offers: true },
    });
  }

  //find all products
  async findAll() {
    try {
      const products = await this.prisma.product.findMany({
        include: { offers: true },
      });
      return products;
    } catch (error) {
      throw new BadRequestException('Error fetching products');
    }
  }

  //find one product
  async findOneProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { offers: true },
    });
    return product;
  }
  //
  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { offers: true },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }
  //
  async update(
    id: string,
    updateProductDto: UpdateProductRequestDto,
    userId: number,
  ) {
    // 1️⃣ Seller Validation
    const seller = await findById(userId, 'seller');
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    // 2️⃣ Fetch product first
    const productexist = await this.prisma.product.findUnique({
      where: { id },
      include: { offers: true },
    });

    if (!productexist) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    // 3️⃣ Ownership validation
    if (productexist.createdById !== seller.id) {
      throw new ForbiddenException(
        'You are not authorized to update this product',
      );
    }

    const { product, offer } = updateProductDto;

    // 4️⃣ Update Product (if provided)
    let updatedProduct: Product | null = null;

    if (product) {
      updatedProduct = await this.prisma.product.update({
        where: { id },
        data: product,
      });
    }

    // 5️⃣ Update Offer (if provided)
    let updatedOffer: Offer | null = null;
    if (offer) {
      // Since offer is created automatically, it must exist
      const existingOffer = await this.prisma.offer.findFirst({
        where: { productId: id },
      });

      if (!existingOffer) {
        throw new NotFoundException('Offer not found for this product');
      }

      // Check owner of offer
      if (existingOffer.sellerId !== seller.id) {
        throw new ForbiddenException(
          'You are not authorized to update this offer',
        );
      }

      updatedOffer = await this.prisma.offer.update({
        where: { id: existingOffer.id },
        data: offer,
      });
    }

    return {
      message: 'Product & Offer updated successfully',
      product: updatedProduct,
      offer: updatedOffer,
    };
  }
  async createoffer(productid: string, userid: number, offerdto: OfferDto) {
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
        ...offerdto,
        productId: productid,
        sellerId: sellerId,
      },
    });

    return createdOffer;
  }

  // ...existing code...
  async remove(id: string) {
    // Ensure product exists
    const existing = await this.prisma.product.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    // Delete product (this will cascade or fail depending on your Prisma schema)
    const deleted = await this.prisma.product.delete({
      where: { id },
    });

    return deleted;
  }
  // product imags  uplaod
  async uploadImages(files: Express.Multer.File[], userId: string) {
    const urls: string[] = [];

    for (const file of files) {
      const path = `images/${userId}/${Date.now()}-${file.originalname}`;

      const { error } = await this.supabase.supabase.storage
        .from("cartconnect1's Project")
        .upload(path, file.buffer, {
          contentType: file.mimetype,
        });

      if (error) throw new BadRequestException(error.message);

      const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/cartconnect1's Project/${path}`;

      urls.push(publicUrl);
    }

    return { urls };
  }
}
