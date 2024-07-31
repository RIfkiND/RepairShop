/*
  Warnings:

  - Added the required column `image` to the `Parts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `Repair_Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `brands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `models` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parts" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Repair_Request" ADD COLUMN     "file" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "file" TEXT;

-- AlterTable
ALTER TABLE "brands" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "models" ADD COLUMN     "image" TEXT NOT NULL;
