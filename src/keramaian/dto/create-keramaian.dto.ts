import { IsNotEmpty, IsNumberString, IsString, MaxLength } from "class-validator";

export class CreateKeramaianDto {
    @IsString()
    @IsNotEmpty()
    readonly namePemohon: string;

    @IsNumberString()
    @IsNotEmpty()
    @MaxLength(16)
    readonly nikPemohon: string;

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
    readonly rangka: string;

    @IsString()
    @IsNotEmpty()
    readonly tglAcara: string;

    @IsString()
    @IsNotEmpty()
    readonly rentangWaktu: string;

    @IsString()
    @IsNotEmpty()
    readonly pdfPath: string;

    @IsString()
    @IsNotEmpty()
    readonly statusData: string;

}
