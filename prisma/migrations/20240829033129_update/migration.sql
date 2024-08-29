/*
  Warnings:

  - You are about to drop the column `cost` on the `Parts` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Parts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Parts" DROP COLUMN "cost",
DROP COLUMN "stock";
