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
import { User } from '@prisma/client';
import { JWTGuard } from 'src/auth/guards';
import { GetCurrentUser, GetCurrentUserId } from 'src/commons';
import { GetUser } from 'src/commons/get-user.decorator';
import { BookMealDto } from './dto/bookMeal.dto';
import { CreateMealDto } from './dto/createMeal.dto';
import { MealService } from './meal.service';

@UseGuards(JWTGuard)
@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}
  @Get('all')
  getAllMeals() {}

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

  @Post('book_meal')
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
