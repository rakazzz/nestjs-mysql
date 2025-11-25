import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenguburanService } from './penguburan.service';
import { CreatePenguburanDto } from './dto/create-penguburan.dto';
import { UpdatePenguburanDto } from './dto/update-penguburan.dto';

@Controller('penguburan')
export class PenguburanController {
  constructor(private readonly penguburanService: PenguburanService) {}

  @Post()
  create(@Body() createPenguburanDto: CreatePenguburanDto) {
    return this.penguburanService.create(createPenguburanDto);
  }

  @Get()
  findAll() {
    return this.penguburanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penguburanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenguburanDto: UpdatePenguburanDto) {
    return this.penguburanService.update(+id, updatePenguburanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penguburanService.remove(+id);
  }
}
