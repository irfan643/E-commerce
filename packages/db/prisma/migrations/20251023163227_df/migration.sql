/*
  Warnings:

  - Made the column `hubPhone` on table `Hub` required. This step will fail if there are existing NULL values in that column.
  - Made the column `manager` on table `Hub` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Hub" ALTER COLUMN "hubPhone" SET NOT NULL,
ALTER COLUMN "manager" SET NOT NULL;
