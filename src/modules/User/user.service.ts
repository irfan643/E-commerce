import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../../../generated/prisma';
 import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/user.dto';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from './Entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email:email },
    });

    return  user;
  }
  public async findById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });

    return  user;
  }


  //create user 
  public async Createuser(user:CreateUserDto){
      
           const hashedPassword = await this.hashPassword(user.password);
           const newUser = await this.prisma.user.create({
               data: {
                   email: user.email,
                   password: hashedPassword,
                   role: user.role ?? 'CUSTOMER',
               },
           });
           return  plainToInstance(UserEntity, newUser);
       }
    async hashPassword (password:string){
            return await bcrypt.hash(password,10);
    }
  public  async  Passwordupdate (password:string,email:string)
  {
        const hashedPassword = await this.hashPassword(password);
        const updatepassword = await this.prisma.user.update({
            where: { email: email },
            data: { password: hashedPassword },
        });
        const { password: _, ...userWithoutPassword } = updatepassword;
        return {
          status: 'success',
          message: 'Password updated successfully',
          user: userWithoutPassword,
        };
}}
