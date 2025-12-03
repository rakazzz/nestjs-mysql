import { Exclude } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateAccessDto {
    @IsString()
    @MaxLength(20)
    readonly username: string;

    @MinLength(6)
    readonly password: string;
}