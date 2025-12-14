import { Module } from '@nestjs/common';
import { KeramaianService } from './keramaian.service';
import { KeramaianController } from './keramaian.controller';
import { Keramaian } from './entities/keramaian.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Keramaian, User])],
  controllers: [KeramaianController],
  exports: [KeramaianService],
  providers: [KeramaianService],
})
export class KeramaianModule {}
