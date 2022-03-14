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
    console.log({ createMealDto, userId });

    return this.mealService.createOneMeal(createMealDto, userId);
  }

  @Delete('create')
  deleteMeal() {}
}
