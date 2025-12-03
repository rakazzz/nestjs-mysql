import { Injectable } from "@nestjs/common";
import { Exclude } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";

@Injectable()
export class LoginDto {
    @IsString()
    @MaxLength(20)
    readonly username: string;

    @MinLength(6)
    readonly password: string;
}