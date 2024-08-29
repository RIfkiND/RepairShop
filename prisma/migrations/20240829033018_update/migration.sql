/*
  Warnings:

  - You are about to alter the column `cost` on the `Parts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE "Parts" ALTER COLUMN "cost" SET DATA TYPE SMALLINT;
