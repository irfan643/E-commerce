import { Exclude } from 'class-transformer';
import { Role } from ' ../../generated/prisma'

export class UserEntity {
  id: number;
  email: string;
  role: Role;
  createdDate: Date;
  updateDate: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
