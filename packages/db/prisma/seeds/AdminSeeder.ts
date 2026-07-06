import { PrismaClient, Role } from '@/../../packages/db/generated/prisma';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@myapp.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'SuperSecret123';

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (existing) {
    console.log('✅ Admin already exists');
    return;
  }

  const hashed = await bcrypt.hash(adminPassword, 10);

  await prisma.user.create({
    data: {
      email: adminEmail,
      password: hashed,
      role: Role.ADMIN,
    },
  });

  console.log('🛠️ Admin user created successfully');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
