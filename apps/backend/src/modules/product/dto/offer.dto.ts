import { IsNumber } from 'class-validator';

export class OfferDto {
  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;
}
