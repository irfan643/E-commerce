import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
