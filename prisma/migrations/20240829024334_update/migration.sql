/*
  Warnings:

  - You are about to drop the column `mode` on the `Parts` table. All the data in the column will be lost.
  - Added the required column `model` to the `Parts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parts" DROP COLUMN "mode",
ADD COLUMN     "model" TEXT NOT NULL;
