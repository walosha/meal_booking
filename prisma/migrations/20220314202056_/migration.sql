/*
  Warnings:

  - You are about to drop the `Meal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Meal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User_Meal" DROP CONSTRAINT "User_Meal_userId_fkey";

-- DropTable
DROP TABLE "Meal";

-- DropTable
DROP TABLE "User_Meal";

-- CreateTable
CREATE TABLE "meals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "mealType" "MealType" NOT NULL DEFAULT E'BREAKFAST',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_meals" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mealId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_meals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "meals_id_key" ON "meals"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_meals_id_key" ON "users_meals"("id");

-- AddForeignKey
ALTER TABLE "users_meals" ADD CONSTRAINT "users_meals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_meals" ADD CONSTRAINT "users_meals_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
