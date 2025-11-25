import { Module } from '@nestjs/common';
import { PenguburanService } from './penguburan.service';
import { PenguburanController } from './penguburan.controller';

@Module({
  controllers: [PenguburanController],
  providers: [PenguburanService],
})
export class PenguburanModule {}
