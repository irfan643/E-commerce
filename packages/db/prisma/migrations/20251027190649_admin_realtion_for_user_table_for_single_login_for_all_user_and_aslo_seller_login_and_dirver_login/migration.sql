/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Hub` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Hub` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ALTER COLUMN "licenseNo" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Hub" ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "hubPhone" DROP NOT NULL,
ALTER COLUMN "manager" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ADMIN" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ADMIN_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ADMIN_userId_key" ON "ADMIN"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Hub_userId_key" ON "Hub"("userId");

-- AddForeignKey
ALTER TABLE "Hub" ADD CONSTRAINT "Hub_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
