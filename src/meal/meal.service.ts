import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMealDto } from './dto/createMeal.dto';

@Injectable()
export class MealService {
  constructor(private prisma: PrismaService) {}
  createOneMeal(createMealDto: CreateMealDto, userId: number) {
    const { name, date, mealType } = createMealDto;
    return this.prisma.meal.create({
      data: { name, date, mealType, created_by: userId },
    });
  }
}
