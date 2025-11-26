import { IsEnum, IsNotEmpty, IsNumberString, IsString, IsUrl, MaxLength } from "class-validator";


enum Gender {
    LAKI_LAKI = "Laki-Laki",
    PEREMPUAN = "Perempuan"
}

export class CreatePenguburanDto {
    @IsString()
    @IsNotEmpty()
    readonly namaAlm: string;

    @IsNumberString()
    @IsNotEmpty()
    @MaxLength(16)
    readonly nikAlm: string;

    @IsString()
    @IsNotEmpty()
    readonly tempatLahirAlm: string;

    @IsString()
    @IsNotEmpty()
    readonly tglLahirAlm: string;

    @IsString()
    @IsEnum(Gender)
    @IsNotEmpty()
    readonly genderAlm: Gender;
    
    @IsString()
    @IsNotEmpty()
    readonly statusKawinAlm: string;

    @IsString()
    @IsNotEmpty()
    readonly pekerjaanAlm: string;

    @IsString()
    @IsNotEmpty()
    readonly alamatAlm: string;

    @IsString()
    @IsNotEmpty()
    readonly tglMeninggal: string;

    @IsString()
    @IsNotEmpty()
    readonly waktuMeninggal: string;

    @IsString()
    @IsNotEmpty()
    readonly tempatMeninggal: string;

    @IsString()
    @IsUrl()
    @IsNotEmpty()
    readonly pdfPath: string;

    @IsString()
    @IsNotEmpty()
    readonly statusData: string;






}
