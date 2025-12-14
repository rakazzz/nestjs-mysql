import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Not, Repository } from 'typeorm';
import { JandaForm } from 'src/janda-form/entities/janda-form.entity';
import { Penguburan } from 'src/penguburan/entities/penguburan.entity';
import { Penutupan } from 'src/penutupan/entities/penutupan.entity';
import { Keramaian } from 'src/keramaian/entities/keramaian.entity';
import { UpdateFormDto } from './dto/update-form-status.dto';
import { JandaFormService } from 'src/janda-form/janda-form.service';
import { PenguburanService } from 'src/penguburan/penguburan.service';
import { PenutupanService } from 'src/penutupan/penutupan.service';
import { KeramaianService } from 'src/keramaian/keramaian.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly jandaService: JandaFormService,
        private readonly penguburanService: PenguburanService,
        private readonly penutupanService: PenutupanService,
        private readonly keramaianService: KeramaianService
    ){}

    async create(user: User): Promise<User>{
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]>{
        return this.userRepository.find({
            relations:{
                suketJandaPemohon: true,
                suketPenguburanPemohon: true,
                suketKeramaianPemohon: true,
                suketPenutupanPemohon: true,
            }
        });
    }

    async findDataByNik(nikUser: string){
        const userData = await this.userRepository.findOne({
            where:{nik: nikUser},
            relations: {
                suketJandaPemohon: true,
                suketPenguburanPemohon: true,
                suketKeramaianPemohon: true,
                suketPenutupanPemohon: true,
            }
        });

        if (!userData){
            throw new NotFoundException(`User with NIK ${nikUser} not found`);
     
        }else {
            return userData;
        }
    }

    async update(id: number, updateFormDto: UpdateFormDto){
        if(updateFormDto.tipeSurat === 'Surat Keterangan Janda'){
            const update = await this.jandaService.update(id, {statusData: updateFormDto.statusData});
            return update
        }else if(updateFormDto.tipeSurat === 'Surat Keterangan Penguburan'){
            const update = await this.penguburanService.update(id, {statusData: updateFormDto.statusData});
            return update
        }else if(updateFormDto.tipeSurat === 'Surat Izin Penutupan Jalan'){
            const update = await this.penutupanService.update(id, {statusData: updateFormDto.statusData});
            return update
        }else if(updateFormDto.tipeSurat === 'Surat Izin Pesta dan Keramaian'){
            const update = await this.keramaianService.update(id, {statusData: updateFormDto.statusData});
            return update
        }else{
            throw new NotFoundException(`Tipe surat ${updateFormDto.tipeSurat} dengan id ${id} tidak ditemukan`);
        }
        // await this.userRepository.update(id, user);
        // return this.findOne(id)
    }

    async remove(id: number): Promise<void>{
        await this.userRepository.delete(id)
    }
}
