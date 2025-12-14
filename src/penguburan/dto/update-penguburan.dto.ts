import { PartialType } from '@nestjs/mapped-types';
import { CreatePenguburanDto } from './create-penguburan.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum StatusData {
    PENDING = 'Pending',
    SELESAI = 'Selesai',
}

export class UpdatePenguburanDto extends PartialType(CreatePenguburanDto) {
    @IsString()
    @IsNotEmpty()
    @IsEnum(StatusData)
    readonly statusData: StatusData;

}
