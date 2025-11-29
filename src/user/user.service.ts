import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
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

    // async update(id: number, user: User): Promise<User>{
    //     await this.userRepository.update(id, user);
    //     return this.findOne(id)
    // }

    async remove(id: number): Promise<void>{
        await this.userRepository.delete(id)
    }
}
