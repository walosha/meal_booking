import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import console from 'console';
import { AuthService } from './auth.service';
import { AuthDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() authDto: AuthDto) {
    return this.authService.signUp(authDto);
  }
}
