import { Injectable } from '@nestjs/common';
import { CreateKeramaianDto } from './dto/create-keramaian.dto';
import { UpdateKeramaianDto } from './dto/update-keramaian.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Keramaian } from './entities/keramaian.entity';

@Injectable()
export class KeramaianService {

constructor(
  @InjectRepository(User)
  private userRepository: Repository<User>,

  @InjectRepository(Keramaian)
  private keramaianRepository: Repository<Keramaian>,
) {}

  async create(createKeramaianDto: CreateKeramaianDto) {
    const{namePemohon, nikPemohon, tempatLahir, tglLahir,pekerjaan, kelamin, alamat, rangka, tglAcara, rentangWaktu, pdfPath, statusData} = createKeramaianDto;
    let user = await this.userRepository.findOneBy({nik: nikPemohon});

    if(!user){
      const newUser = this.userRepository.create({
        name: namePemohon,
        nik: nikPemohon,
        birthPlace: tempatLahir,
        birthDate: tglLahir,
        job: pekerjaan,
        gender: kelamin,
        address: alamat,
      });
      user = await this.userRepository.save(newUser);
    }

    const keramaian = this.keramaianRepository.create({
      pemohon: user,
      rangka,
      tglAcara,
      rentangWaktu,
      pdfPath,
      statusData
    });
    return this.keramaianRepository.save(keramaian);
  }

  async findAll() {
    return this.keramaianRepository.find({
      relations: {pemohon: true},
    });
  }

    async findByNik(nikParam: string) {
    const keramaianRepo = this.keramaianRepository
    return keramaianRepo.find({
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

  async findOne(id: number) {
    return this.keramaianRepository.findOneBy({id});
  }

  async update(id: number, updateKeramaianDto: UpdateKeramaianDto) {
    return this.keramaianRepository.update(id, updateKeramaianDto);
  }

  async remove(id: number) {
    return this.keramaianRepository.delete(id);
  }
}
