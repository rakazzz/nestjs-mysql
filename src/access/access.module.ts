import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Access } from './entity/access.entity';
import { LoginDto } from './dto/login-access.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Access])],
  providers: [AccessService],
  exports: [AccessService],
})
export class AccessModule {}
