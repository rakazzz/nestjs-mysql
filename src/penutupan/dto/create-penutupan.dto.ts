import { IsNotEmpty, IsNumberString, IsString, IsUrl, MaxLength } from "class-validator";

export class CreatePenutupanDto {
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
    readonly rentangTanggal: string;

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
    @IsUrl()
    @IsNotEmpty()
    readonly pdfPath: string;

    @IsString()
    @IsNotEmpty()
    readonly statusData: string;


}
