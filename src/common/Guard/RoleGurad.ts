import { Reflector } from "@nestjs/core";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, } from "@nestjs/common";
@Injectable()
export class RoleGurad implements CanActivate{
    constructor (
        
        private readonly reflector:Reflector
    ){}

      async canActivate(context: ExecutionContext): Promise <boolean> {
              const roles =this.reflector.get<string[]>('roles',context.getHandler())
             if (roles.length === 0)
                return  true
               const request = context.switchToHttp().getRequest()

               if (!roles.includes(request.role))
      throw new UnauthorizedException("permission denied");


 return true

      }

      

          
      }


    
