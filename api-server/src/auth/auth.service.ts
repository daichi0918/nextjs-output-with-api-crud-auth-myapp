import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { PrismaService } from '../prisma.service';
import { JwtPayload } from '../lib/jwt/interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtSecret: JwtService,
  ) {}

  async signIn(signInUserDto: SignInUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: signInUserDto.email,
      },
    });
    // パスワード照合
    if (
      !user ||
      !(await bcrypt.compare(signInUserDto.password, user.password))
    ) {
      throw new UnauthorizedException(
        'メールアドレスまたはパスワードが違います',
      );
    }

    const payload: JwtPayload = {
      userId: user.id,
      email: user.email,
    };

    // jwtアクセストークンを作成し返却
    return {
      accessToken: this.jwtSecret.sign(payload),
    };
  }
}
