import { IsEmail, IsNotEmpty, MinLength,IsEnum } from 'class-validator';

import { Role } from '../../../../generated/prisma';

export class CreateUserDto {
  @ IsNotEmpty()
  @IsEmail()
  email: string;
   
   @MinLength(6)
   password:string

  @IsNotEmpty()
  @IsEnum(Role)
  role?: Role;
}