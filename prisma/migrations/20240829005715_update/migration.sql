/*
  Warnings:

  - You are about to drop the column `image` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `models` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "brands" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "models" DROP COLUMN "image";
