/*
  Warnings:

  - You are about to drop the column `file` on the `Repair_Request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Repair_Request" DROP COLUMN "file",
ALTER COLUMN "complete_date" DROP NOT NULL;
