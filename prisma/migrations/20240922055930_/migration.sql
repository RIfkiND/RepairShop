/*
  Warnings:

  - You are about to alter the column `stock` on the `Parts` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.

*/
-- AlterTable
ALTER TABLE "Parts" ALTER COLUMN "cost" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "stock" SET DATA TYPE SMALLINT;
