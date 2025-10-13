import { applyDecorators } from "@nestjs/common"
import { SetMetadata } from "@nestjs/common";
import { Role } from "generated/prisma";
import { RoleGurad } from "./RoleGurad";
import { AuthGuard } from "./JwtGurad"; 
 import { UseGuards } from "@nestjs/common";
 const ROLES_KEY = 'roles';

export  function Auth (...roles: Role[]){
    return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
UseGuards(AuthGuard,RoleGurad)
)
}
    
