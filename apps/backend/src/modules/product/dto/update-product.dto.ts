import { PartialType } from '@nestjs/mapped-types';
import { OfferDto } from './offer.dto';
import { ProductDto } from './product.dto';

// export class UpdateProductDto extends PartialType(CreateProductDto) {}
// export class UpdateProductDto extends  PartialType(UpdateProductRequestDto)  {}
export class UpdateProductDto extends PartialType(ProductDto) {}
export class UpdateOfferDto extends PartialType(OfferDto) {}
