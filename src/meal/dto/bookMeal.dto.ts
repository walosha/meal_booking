import { IsNotEmpty } from 'class-validator';

export class BookMealDto {
  @IsNotEmpty()
  mealId: number;
}
