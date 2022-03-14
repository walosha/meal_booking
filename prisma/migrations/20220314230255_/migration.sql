/*
  Warnings:

  - Added the required column `created_by` to the `meals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "created_by" TEXT NOT NULL;
