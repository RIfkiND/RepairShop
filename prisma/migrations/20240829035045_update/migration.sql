/*
  Warnings:

  - Added the required column `brand_name` to the `Parts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `Parts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_name` to the `Parts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Parts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parts" ADD COLUMN     "brand_name" TEXT NOT NULL,
ADD COLUMN     "cost" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "model_name" TEXT NOT NULL,
ADD COLUMN     "stock" SMALLINT NOT NULL;
