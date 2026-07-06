/*
  Warnings:

  - Added the required column `address` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'Hub';

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "address" TEXT NOT NULL;
