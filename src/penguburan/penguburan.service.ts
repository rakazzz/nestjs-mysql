import { Injectable } from '@nestjs/common';
import { CreatePenguburanDto } from './dto/create-penguburan.dto';
import { UpdatePenguburanDto } from './dto/update-penguburan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Penguburan } from './entities/penguburan.entity';

@Injectable()
export class PenguburanService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Penguburan)
    private penguburanRepository: Repository<Penguburan>,
  ) {}
  async create(createPenguburanDto: CreatePenguburanDto) {

    const {namaAlm, nikAlm, tempatLahirAlm, tglLahirAlm, genderAlm, pekerjaanAlm, alamatAlm, tglMeninggal, waktuMeninggal, tempatMeninggal, pdfPath, statusData} = createPenguburanDto;

    let user = await this.userRepository.findOneBy({nik: nikAlm});

    if(!user){
      const newUser = this.userRepository.create({
        name: namaAlm,
        nik: nikAlm,
        birthPlace: tempatLahirAlm,
        birthDate: tglLahirAlm,
        gender: genderAlm,
        job: pekerjaanAlm,
        address: alamatAlm
      })
      user =  await this.userRepository.save(newUser);
    }
    const penguburan = this.penguburanRepository.create({
      pemohon: user,
      tglMeninggal,
      waktuMeninggal,
      pdfPath,
      statusData
    })
    return this.penguburanRepository.save(penguburan);
  }

  async findAll() {
    return this.penguburanRepository.find({
      relations: {pemohon: true},
    });
  }

  async findOne(id: number) {
    return this.penguburanRepository.findOneBy({id});
  }

  async findByNik(nikParam: string) {
    const penguburanRepo = this.penguburanRepository;
    return penguburanRepo.find({
      where:{
        pemohon:{
          nik: nikParam
        },
      },
      relations:{
        pemohon: true,
      }
    })
  }

  async update(id: number, updatePenguburanDto: UpdatePenguburanDto) {
    return this.penguburanRepository.update(id, updatePenguburanDto);
  }

  async remove(id: number) {
    return this.penguburanRepository.delete(id);
  }
}
