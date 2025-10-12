/*
  Warnings:

  - A unique constraint covering the columns `[hubEmail]` on the table `Hub` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `licenseNo` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hubAddress` to the `Hub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hubEmail` to the `Hub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hubName` to the `Hub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hubPhone` to the `Hub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manager` to the `Hub` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "licenseNo" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "vehicleNo" TEXT,
ADD COLUMN     "vehicleType" TEXT;

-- AlterTable
ALTER TABLE "Hub" ADD COLUMN     "hubAddress" TEXT NOT NULL,
ADD COLUMN     "hubEmail" TEXT NOT NULL,
ADD COLUMN     "hubName" TEXT NOT NULL,
ADD COLUMN     "hubPhone" TEXT NOT NULL,
ADD COLUMN     "manager" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hub_hubEmail_key" ON "Hub"("hubEmail");
