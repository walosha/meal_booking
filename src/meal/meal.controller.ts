import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateMealDto } from './dto/createMeal.dto';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}
  @Get('all')
  getAllMeals() {}

  @Get('one')
  getOneMeal() {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createMeal(createMealDto: CreateMealDto) {
    return this.mealService.createOneMeal(createMealDto);
  }

  @Delete('create')
  deleteMeal() {}
}
