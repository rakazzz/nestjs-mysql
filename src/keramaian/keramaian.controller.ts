import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeramaianService } from './keramaian.service';
import { CreateKeramaianDto } from './dto/create-keramaian.dto';
import { UpdateKeramaianDto } from './dto/update-keramaian.dto';

@Controller('keramaian')
export class KeramaianController {
  constructor(private readonly keramaianService: KeramaianService) {}

  @Post()
  create(@Body() createKeramaianDto: CreateKeramaianDto) {
    return this.keramaianService.create(createKeramaianDto);
  }

  @Get()
  findAll() {
    return this.keramaianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keramaianService.findOne(+id);
  }
  
  @Get('nik/:nik')
  findByNik(@Param('nik') nik: string) {
    return this.keramaianService.findByNik(nik);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeramaianDto: UpdateKeramaianDto) {
    return this.keramaianService.update(+id, updateKeramaianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keramaianService.remove(+id);
  }
}
