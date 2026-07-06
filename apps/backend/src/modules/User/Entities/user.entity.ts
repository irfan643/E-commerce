import { Exclude } from 'class-transformer';
import { Role } from '../../../common/enum/Role';

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
