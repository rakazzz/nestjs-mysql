import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Access } from './entity/access.entity';
import { Repository } from 'typeorm';
import { CreateAccessDto } from './dto/CreateAccess.dto';


@Injectable()
export class AccessService {
    constructor(
        @InjectRepository(Access)
        private readonly accessRepository: Repository<Access>,

    ){}

    // private readonly users: User[] = [
    //     {
    //         userid:1, 
    //         username: 'lawl',
    //         password: 'lawlPass',
    //     },
    //     {
    //         userid:2,
    //         username: 'tony',
    //         password: 'tonyPass',
    //     }
    // ]

    async findOne(username: string): Promise<any> {
        const user = this.accessRepository.findOne({where: {username: username}})
        return user;
    
    }

    async findByToken(refreshToken: string){
        return this.accessRepository.findOne({where: {refresh_token: refreshToken}});
    }
    
    async create(access: CreateAccessDto){
        // this.accessRepository.create(access)
        return this.accessRepository.save(access);
    }

    async updateRefreshToken(id: number, refresh_token: string){
        return this.accessRepository.update(id, {refresh_token: refresh_token});
    }
}
