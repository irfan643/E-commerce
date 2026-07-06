import { Role, PUBLIC_ROLES } from '../../../common/enum/Role';
import { RoleStrategy } from './role-strategy.interface';
import { Customerstratrgy } from './customer.strategy';
import { Sellerstratrgy } from './seller.strategy';
import { Hubstratrgy } from './hub.strategy';
import { Driverstratrgy } from './driver.strategys';

import { BadRequestException, Injectable } from '@nestjs/common';
type NonAdminRole = Exclude<Role, 'ADMIN'>;

@Injectable()
export class Rolestrategyfactory {
  isPublicRole(role: Role): boolean {
    return PUBLIC_ROLES.includes(role);
  }

  private strategies: Record<NonAdminRole, RoleStrategy>;

  constructor(
    private readonly customer: Customerstratrgy,
    private readonly seller: Sellerstratrgy,
    private readonly driver: Driverstratrgy,
    private readonly hub: Hubstratrgy,
  ) {
    this.strategies = {
      [Role.CUSTOMER]: this.customer,
      [Role.SELLER]: this.seller,
      [Role.DRIVER]: this.driver,
      [Role.HUB]: this.hub,
    };
  }

  private isValidRole(role: any): role is Role {
    return Object.values(Role).includes(role as Role);
  }

  getStrategy(role: Role | string): RoleStrategy {
    if (role === 'admin') {
      throw new BadRequestException(`No strategy for admin role`);
    }
    const normalizedRole =
      typeof role === 'string'
        ? (Object.values(Role).find(
            (r) => r.toUpperCase() === role.toUpperCase(),
          ) as Role)
        : role;

    if (!this.isValidRole(normalizedRole)) {
      throw new BadRequestException(`Unsupported role: ${role}`);
    }

    const strategy = this.strategies[normalizedRole];
    if (!strategy) {
      throw new BadRequestException(
        `No strategy found for role: ${normalizedRole}`,
      );
    }

    return strategy;
  }
}
