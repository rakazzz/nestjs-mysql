import { IsEnum, IsNotEmpty, IsString } from "class-validator";

enum StatusData {
    PENDING = 'Pending',
    SELESAI = 'Selesai',
}

export class UpdateFormDto  {

    @IsString()
    @IsNotEmpty()
    @IsEnum(StatusData)
    readonly statusData: StatusData;

    @IsNotEmpty()
    readonly tipeSurat: string;
}
