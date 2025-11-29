import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenutupanService } from './penutupan.service';
import { CreatePenutupanDto } from './dto/create-penutupan.dto';
import { UpdatePenutupanDto } from './dto/update-penutupan.dto';

@Controller('penutupan')
export class PenutupanController {
  constructor(private readonly penutupanService: PenutupanService) {}

  @Post()
  create(@Body() createPenutupanDto: CreatePenutupanDto) {
    return this.penutupanService.create(createPenutupanDto);
  }

  @Get()
  findAll() {
    return this.penutupanService.findAll();
  }

  @Get('nik/:nik')
  findByNik(@Param('nik') nik: string) {
    return this.penutupanService.findByNik(nik);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penutupanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenutupanDto: UpdatePenutupanDto) {
    return this.penutupanService.update(+id, updatePenutupanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penutupanService.remove(+id);
  }
}
