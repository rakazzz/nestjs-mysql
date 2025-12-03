import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessService } from 'src/access/access.service';
import * as bcrypt from 'bcrypt';
import { CreateAccessDto } from 'src/access/dto/CreateAccess.dto';
import { Access } from 'src/access/entity/access.entity';
import { LoginDto } from 'src/access/dto/login-access.dto';

@Injectable()
export class AuthService {
    hashRound: number = 10;

    constructor(
        private accessService: AccessService,
        private jwtService: JwtService
    ){}


    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.accessService.findOne(username);

        if(!user) {
            throw new HttpException('Username not found!', HttpStatus.UNAUTHORIZED);
        }

        const isPassValid = await bcrypt.compare(password, user.password);
        if(!isPassValid){
            throw new HttpException('Invalid password!', HttpStatus.UNAUTHORIZED);
        }
        const payload = { username: user.username, sub: user.id };
        return payload;

        // if (user && user.password === pass) {
        //     const { password, ...result } = user;
        //     return result;
        // }

        // return null;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user.sub};
        return {
            username: payload.username,
            access_token: this.jwtService.sign(payload),
            id: payload.sub
        }
    }

    async signup(payload: CreateAccessDto){
        const hashPass  = await bcrypt.hash(payload.password, this.hashRound);

        const payloadWithHash = {...payload, password: hashPass};
        return this.accessService.create(payloadWithHash);
    }

}
