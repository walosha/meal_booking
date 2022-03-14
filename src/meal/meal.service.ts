import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMealDto } from './dto/createMeal.dto';

@Injectable()
export class MealService {
  constructor(private prisma: PrismaService) {}
  createOneMeal(createMealDto: CreateMealDto) {
    const { name, date, mealType } = createMealDto;
    this.prisma.meal.create({
      data: { name, date, mealType },
    });
  }
}
