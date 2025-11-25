import { IsDate, IsNotEmpty, IsNumberString, IsString, MaxLength } from "class-validator";

export class CreateJandaFormDto {
    
    @IsString()
    @IsNotEmpty()
    readonly nameJanda: string;

    @IsNumberString()
    @IsNotEmpty()
    @MaxLength(16)
    readonly nikJanda: string;

    @IsString()
    @IsNotEmpty()
    readonly tempatLahir: string;

    @IsString()
    @IsNotEmpty()
    readonly tglLahir: string;

    @IsString()
    @IsNotEmpty()
    readonly kelamin: string;

    @IsString()
    @IsNotEmpty()
    readonly pekerjaan: string;

    @IsString()
    @IsNotEmpty()
    readonly alamat: string;

    // @IsDate()
    // @IsNotEmpty()
    // readonly tanggal: string;

    @IsString()
    @IsNotEmpty()
    readonly jenisCerai: string;

    @IsString()
    @IsNotEmpty()
    readonly namaPasangan: string;

    @IsString()
    @IsNotEmpty()
    readonly pdfPath: string;

    @IsString()
    @IsNotEmpty()
    readonly statusData: string;



}
