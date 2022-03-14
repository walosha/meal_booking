import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, RegisterDto } from './dto';
import { verify, hash } from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(registerDto: RegisterDto) {
    const { email, password } = registerDto;
    const user = await this.prisma.user.findUnique({ where: { email } });
    //throw error if it does not
    if (!user) {
      throw new ForbiddenException('Email and/(or) Password is not correct!');
    }
    // Check if password match
    const isPassword = await verify(user.password, password);

    //throw error if test fails

    if (!isPassword) {
      throw new ForbiddenException('Email and/(or) Password is not correct!');
    }

    return { token: await this.signInToken(user.email, user.id) };
  }

  async signInToken(email: string, userId: number): Promise<string> {
    const JWT_SECRET = this.config.get('JWT_SECRET');
    const payload = { email, id: userId };

    return await this.jwt.signAsync(payload, {
      secret: JWT_SECRET,
      expiresIn: '120m',
    });
  }

  async signUp(authDto: AuthDto) {
    const { firstName, lastName, email, password } = authDto;
    const hashedPassword = await hash(password);
    return await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
  }
}
