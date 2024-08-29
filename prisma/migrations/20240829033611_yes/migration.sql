/*
  Warnings:

  - You are about to drop the column `brand` on the `Parts` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Parts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Parts" DROP COLUMN "brand",
DROP COLUMN "model";
