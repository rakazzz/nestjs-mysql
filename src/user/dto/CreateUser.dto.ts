import { Transform } from "class-transformer";
import { IsNumberString, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly name: string;
    
    @IsNumberString()
    @MaxLength(16)
    readonly NIK: string;

    @IsString()
    readonly birthPlace: string;

    @IsString()
    readonly birthDate: string;

    @IsString()
    readonly job: string;

    @IsString()
    readonly gender: string;

    @IsString()
    readonly address: string;

}
