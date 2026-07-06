import { Type } from 'class-transformer';
import {
  ValidateNested,
  IsDefined,
  IsNotEmptyObject,
  IsOptional,
} from 'class-validator';
import { ProductDto } from './product.dto';
import { OfferDto } from './offer.dto';
import { UpdateOfferDto, UpdateProductDto } from './update-product.dto';

export class CreateProductRequestDto {
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDto)
  product!: ProductDto;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OfferDto)
  offer!: OfferDto;
}
export class UpdateProductRequestDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateProductDto)
  product?: UpdateProductDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateOfferDto)
  offer?: UpdateOfferDto;
}
