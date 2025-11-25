import { Module } from '@nestjs/common';
import { PenguburanService } from './penguburan.service';
import { PenguburanController } from './penguburan.controller';
import { Penguburan } from './entities/penguburan.entity';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Penguburan, User])],
  controllers: [PenguburanController],
  providers: [PenguburanService],
})
export class PenguburanModule {}
