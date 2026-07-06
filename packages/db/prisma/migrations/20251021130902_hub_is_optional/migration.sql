-- DropForeignKey
ALTER TABLE "Seller" DROP CONSTRAINT "Seller_hubId_fkey";

-- AlterTable
ALTER TABLE "Seller" ALTER COLUMN "hubId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "Hub"("id") ON DELETE SET NULL ON UPDATE CASCADE;
