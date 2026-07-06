import { IsEmail, IsNotEmpty, MinLength, IsIn, IsEnum } from 'class-validator';

import { Role } from '../../../common/enum/Role';
import { Exclude } from 'class-transformer';
export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
