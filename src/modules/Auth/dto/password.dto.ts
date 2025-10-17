import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class updatepassword {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
