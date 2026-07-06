import { applyDecorators } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enum/Role';
import { RoleGurad } from './RoleGurad';
import { AuthGuard } from './JwtGurad';
import { UseGuards } from '@nestjs/common';
const ROLES_KEY = 'roles';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RoleGurad),
    //if  no role is specified  only jwt guard will work due to role.length===0 check in RoleGuard
  );
}
