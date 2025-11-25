import { Injectable } from '@nestjs/common';
import { CreatePenguburanDto } from './dto/create-penguburan.dto';
import { UpdatePenguburanDto } from './dto/update-penguburan.dto';

@Injectable()
export class PenguburanService {
  create(createPenguburanDto: CreatePenguburanDto) {
    return 'This action adds a new penguburan';
  }

  findAll() {
    return `This action returns all penguburan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} penguburan`;
  }

  update(id: number, updatePenguburanDto: UpdatePenguburanDto) {
    return `This action updates a #${id} penguburan`;
  }

  remove(id: number) {
    return `This action removes a #${id} penguburan`;
  }
}
