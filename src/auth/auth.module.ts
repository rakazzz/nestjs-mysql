import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessModule } from 'src/access/access.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtSrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AccessModule, 
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtSrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
