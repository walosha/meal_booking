import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookMealDto } from './dto/bookMeal.dto';
import { CreateMealDto } from './dto/createMeal.dto';

@Injectable()
export class MealService {
  constructor(private prisma: PrismaService) {}
  getAllMeal() {
    return this.prisma.meal.findMany();
  }

  getAllMealByStaff() {
    return this.prisma.meal.findMany({
      where: {
        id: 1,
      },
      include: {
        userMeal: true, // Return all fields
      },
    });
  }

  bookMeal(bookMealDto: BookMealDto, userId) {
    const { mealId } = bookMealDto;

    try {
      return this.prisma.user_Meal.create({ data: { userId, mealId } });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  createOneMeal(createMealDto: CreateMealDto, userId: number) {
    const { name, date, mealType } = createMealDto;
    return this.prisma.meal.create({
      data: { name, date, mealType, created_by: userId },
    });
  }
}
