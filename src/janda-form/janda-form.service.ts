import { Injectable } from '@nestjs/common';
import { CreateJandaFormDto } from './dto/create-janda-form.dto';
import { UpdateJandaFormDto } from './dto/update-janda-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JandaForm } from './entities/janda-form.entity';
import { DataSource, Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class JandaFormService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(JandaForm)
    private jandaRepository: Repository<JandaForm>,
  ){}
  
  async create(createJandaFormDto: CreateJandaFormDto) {
    const {nameJanda, nikJanda, tempatLahir,  tglLahir, kelamin, pekerjaan, alamat, jenisCerai, namaPasangan, pdfPath, statusData} = createJandaFormDto;

    let user = await this.userRepository.findOneBy({nik: nikJanda});

    if(!user){
      const newUser = this.userRepository.create({
        name: nameJanda,
        nik: nikJanda,
        birthPlace: tempatLahir,
        birthDate: tglLahir,
        gender: kelamin,
        job: pekerjaan,
        address: alamat,
      });
      user = await this.userRepository.save(newUser);
    }

    const jandaForm = this.jandaRepository.create({
      pemohon: user,
      jenisCerai,
      namaPasangan,
      pdfPath,
      statusData
    });

    return this.jandaRepository.save(jandaForm);
  }

  async findAll() {
    return this.jandaRepository.find({
      relations: {pemohon: true},
    });
  }

  async findOne(id: number) {

    return this.jandaRepository.findOneBy({id});
  }

  async findByNik(nikParam: string) {
    const jandaRepo = this.jandaRepository
    return jandaRepo.find({
      where:{
        pemohon:{
          nik: nikParam
        },
      },
      relations:{
        pemohon: true,
      }
      // relations: {
      //   pemohon: true,
      // }
    })
  
  }

  async update(id: number, updateJandaFormDto: UpdateJandaFormDto) {
    return this.jandaRepository.update(id, updateJandaFormDto);
  }

  async remove(id: number) {
    return this.jandaRepository.delete(id);
  }
}
