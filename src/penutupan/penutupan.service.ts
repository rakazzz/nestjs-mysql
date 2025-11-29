import { Injectable } from '@nestjs/common';
import { CreatePenutupanDto } from './dto/create-penutupan.dto';
import { UpdatePenutupanDto } from './dto/update-penutupan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Penutupan } from './entities/penutupan.entity';

@Injectable()
export class PenutupanService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Penutupan)
    private penutupanRepository: Repository<Penutupan>,
  ) {}

  async create(createPenutupanDto: CreatePenutupanDto) {
    const {namePemohon, nikPemohon, tempatLahir, tglLahir, kelamin, pekerjaan, alamat, rentangTanggal, rangka, tglAcara, rentangWaktu, pdfPath, statusData} = createPenutupanDto;
    let user = await this.userRepository.findOneBy({nik: nikPemohon});
    
    if(!user){
      const newUser = this.userRepository.create({
        name: namePemohon,
        nik: nikPemohon,
        birthPlace: tempatLahir,
        birthDate: tglLahir,
        gender: kelamin,
        job: pekerjaan,
        address: alamat,
      });
      user = await this.userRepository.save(newUser);
    }
    const penutupan = this.penutupanRepository.create({
      pemohon: user,
      rentangTanggal,
      rangka,
      tglAcara,
      rentangWaktu,
      pdfPath,
      statusData
    });
    return this.penutupanRepository.save(penutupan);
  }

  async findAll() {
    return this.penutupanRepository.find({
      relations: {pemohon: true},
    });
  }

  async findByNik(nikParam: string) {
    const penutupanRepo = this.penutupanRepository
    return penutupanRepo.find({
      where:{
        pemohon:{
          nik: nikParam
        },
      },
    });
  }

  async findOne(id: number) {
    return this.penutupanRepository.findOneBy({id});
  }

  async update(id: number, updatePenutupanDto: UpdatePenutupanDto) {
    return this.penutupanRepository.update(id, updatePenutupanDto);
  }

  async remove(id: number) {
    return this.penutupanRepository.delete(id);
  }
}
