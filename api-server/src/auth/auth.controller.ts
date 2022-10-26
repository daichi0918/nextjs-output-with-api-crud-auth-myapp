import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { LocalAuthGuard } from '../lib/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign_in')
  @HttpCode(200)
  async signIn(@Body(ValidationPipe) signInUserDto: SignInUserDto) {
    return await this.authService.signIn(signInUserDto);
  }
}
