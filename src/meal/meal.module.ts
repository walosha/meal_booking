import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/strategy';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';

@Module({
  controllers: [MealController],
  providers: [MealService, JwtStrategy],
})
export class MealModule {}
