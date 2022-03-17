import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JWTGuard } from 'src/auth/guards';
import { GetCurrentUserId } from 'src/commons';
import { BookMealDto } from './dto/bookMeal.dto';
import { CreateMealDto } from './dto/createMeal.dto';
import { MealService } from './meal.service';

@UseGuards(JWTGuard)
@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}
  @Get('all')
  getAllMeals() {
    return this.mealService.getAllMeal();
  }

  @Get('staff')
  getAllStaffbyMeal() {
    return this.mealService.getAllMealByStaff();
  }

  @Get('one')
  getOneMeal() {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createMeal(
    @Body() createMealDto: CreateMealDto,
    @GetCurrentUserId() userId: number,
  ) {
    return this.mealService.createOneMeal(createMealDto, userId);
  }

  @Post('book')
  @HttpCode(HttpStatus.CREATED)
  bookMeal(
    @Body() bookMealDto: BookMealDto,
    @GetCurrentUserId() userId: number,
  ) {
    return this.mealService.bookMeal(bookMealDto, userId);
  }

  @Delete('create')
  deleteMeal() {}
}
