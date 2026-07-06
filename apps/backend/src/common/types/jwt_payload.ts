import { Role } from '../enum/Role';
type jwtRole = Exclude<Role, 'SELLER' | 'CUSTOMER' | 'DRIVER' | 'Hub'>;
export interface JwtPayload {
  sub: number;
  email: string;
  role: jwtRole;
}
