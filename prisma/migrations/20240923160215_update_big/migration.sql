/*
  Warnings:

  - You are about to drop the column `customerId` on the `Repair_Request` table. All the data in the column will be lost.
  - You are about to drop the column `deviceId` on the `Repair_Request` table. All the data in the column will be lost.
  - You are about to drop the column `problem` on the `Repair_Request` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Devices` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Repair_Request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Repair_Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Repair_Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Devices" DROP CONSTRAINT "Devices_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Repair_Request" DROP CONSTRAINT "Repair_Request_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Repair_Request" DROP CONSTRAINT "Repair_Request_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_customerId_fkey";

-- AlterTable
ALTER TABLE "Repair_Request" DROP COLUMN "customerId",
DROP COLUMN "deviceId",
DROP COLUMN "problem",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "customerId";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Devices";

-- CreateIndex
CREATE UNIQUE INDEX "Repair_Request_email_key" ON "Repair_Request"("email");
