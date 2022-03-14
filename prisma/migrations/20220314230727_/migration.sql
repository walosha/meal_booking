/*
  Warnings:

  - Changed the type of `created_by` on the `meals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "meals" DROP COLUMN "created_by",
ADD COLUMN     "created_by" INTEGER NOT NULL;
