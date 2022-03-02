import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(authDto: AuthDto) {
    const { firstName, lastName, email, password } = authDto;
    return await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
  }
}
