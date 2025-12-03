import { Body, ClassSerializerInterceptor, Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './user/user.entity';
import { LoginDto } from './access/dto/login-access.dto';
import { Public } from './auth/constants';

@Controller()
// @UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(private authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body);
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
