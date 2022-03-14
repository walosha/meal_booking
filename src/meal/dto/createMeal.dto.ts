import { MealType } from '@prisma/client';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMealDto {
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  name: string;

  @IsIn([MealType.BREAKFAST, MealType.LUNCH, MealType.DINNER])
  mealType: MealType;
}
