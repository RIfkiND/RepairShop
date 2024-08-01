-- DropIndex
DROP INDEX "Admin_name_key";

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
