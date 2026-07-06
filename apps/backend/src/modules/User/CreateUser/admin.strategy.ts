// import { RoleStrategy } from "./role-strategy.interface";
// import { Injectable } from "@nestjs/common";
// import { User } from "@/../../../packages/db/generated/prisma";
// import { PrismaService } from "../../../prisma/prisma.service";
// @Injectable()
// export class  Adminstratrgy implements RoleStrategy{
//     constructor(private readonly prisma: PrismaService){}
//          async handler(user: User, data: any): Promise<any> {
//           return  await this.prisma.admin.create({
//       data: {
//          userId: user.id,
//       },
//     });
//          }
//           profile(userId: number) {
//     return this.prisma.admin.findUnique({ where: { userId } });
//   }
// }
