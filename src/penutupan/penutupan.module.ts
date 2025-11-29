import { Module } from '@nestjs/common';
import { PenutupanService } from './penutupan.service';
import { PenutupanController } from './penutupan.controller';
import { Penutupan } from './entities/penutupan.entity';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Penutupan, User])],
  controllers: [PenutupanController],
  providers: [PenutupanService],
})
export class PenutupanModule {}
