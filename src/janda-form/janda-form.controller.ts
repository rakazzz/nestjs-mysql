import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JandaFormService } from './janda-form.service';
import { CreateJandaFormDto } from './dto/create-janda-form.dto';
import { UpdateJandaFormDto } from './dto/update-janda-form.dto';

@Controller('janda-form')
export class JandaFormController {
  constructor(private readonly jandaFormService: JandaFormService) {}

  @Post()
  create(@Body() createJandaFormDto: CreateJandaFormDto) {
    return this.jandaFormService.create(createJandaFormDto);
  }

  @Get()
  findAll() {
    return this.jandaFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jandaFormService.findOne(+id);
  }

  @Get('nik/:nik')
  findByNik(@Param('nik') nik: string) {
    return this.jandaFormService.findByNik(nik);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJandaFormDto: UpdateJandaFormDto) {
    return this.jandaFormService.update(+id, updateJandaFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jandaFormService.remove(+id);
  }
}
