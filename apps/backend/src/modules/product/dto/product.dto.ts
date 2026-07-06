import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsString({ each: true })
  productImgs: string[];

  @IsOptional()
  @IsString()
  weight?: string;

  @IsOptional()
  @IsString()
  categories?: string;

  @IsString()
  sku: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsString()
  storeReview?: string;

  @IsOptional()
  @IsString()
  dimensions?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords?: string[];
}
