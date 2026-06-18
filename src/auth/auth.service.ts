import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
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
        const payload = { fullname: user.fullname, username: user.username, sub: user.id , refresh_token: user.refresh_token};
        return payload;

        // if (user && user.password === pass) {
        //     const { password, ...result } = user;
        //     return result;
        // }

        // return null;
    }

    async login(user: any){
        const payload = {fullname: user.fullname, username: user.username, sub: user.sub};
        return {
            fullname: payload.fullname,
            username: payload.username,
            access_token: this.jwtService.sign(payload),
            refresh_token: await this.createRefreshToken(user),
            id: payload.sub
        }
    }

    async signup(payload: CreateAccessDto){
        const hashPass  = await bcrypt.hash(payload.password, this.hashRound);

        const payloadWithHash = {fullname: payload.fullname, username: payload.username, password: hashPass, refresh_token: ''}; ;
        return this.accessService.create(payloadWithHash);
    }

    async createRefreshToken(user: any){
        const refreshToken = this.jwtService.sign({}, {expiresIn: '120s'});
        user.refresh_token = refreshToken;
        await this.accessService.updateRefreshToken(user.sub, refreshToken);
        return refreshToken;
    }

    async refreshAccessToken(refreshToken: string){
        try{
            const decode = this.jwtService.verify(refreshToken);
            const user = await this.accessService.findByToken(refreshToken)

            if(!user){
                throw new UnauthorizedException('Invalid Refresh Token!');
            }

            const payload = {username: user.username, sub: user.id};
            return {
                access_token: this.jwtService.sign(payload),
            };
        }catch(e){
            throw new UnauthorizedException({message: 'Expired or Invalid Refresh Token!',
                error: e.message
            });
        }
    }

}
