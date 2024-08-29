/*
  Warnings:

  - You are about to drop the column `brandId` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `modelId` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Parts` table. All the data in the column will be lost.
  - You are about to drop the column `modelId` on the `Parts` table. All the data in the column will be lost.
  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `models` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brand` to the `Devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Parts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `Parts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Devices" DROP CONSTRAINT "Devices_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Devices" DROP CONSTRAINT "Devices_modelId_fkey";

-- DropForeignKey
ALTER TABLE "Devices" DROP CONSTRAINT "Devices_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Parts" DROP CONSTRAINT "Parts_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Parts" DROP CONSTRAINT "Parts_modelId_fkey";

-- DropForeignKey
ALTER TABLE "models" DROP CONSTRAINT "models_brandId_fkey";

-- AlterTable
ALTER TABLE "Devices" DROP COLUMN "brandId",
DROP COLUMN "modelId",
DROP COLUMN "typeId",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parts" DROP COLUMN "brandId",
DROP COLUMN "modelId",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "mode" TEXT NOT NULL;

-- DropTable
DROP TABLE "brands";

-- DropTable
DROP TABLE "models";

-- DropTable
DROP TABLE "type";
