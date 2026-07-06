import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
@Injectable()
export class RoleGurad implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handlerRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    const classRoles = this.reflector.get<string[]>(
      'roles',
      context.getClass(),
    );
    const roles = handlerRoles || classRoles;
    if (!roles)
      //if role not define then only  jwt verification is enough
      return true;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!roles.includes(user.role))
      throw new UnauthorizedException('permission denied');

    return true;
  }
}
