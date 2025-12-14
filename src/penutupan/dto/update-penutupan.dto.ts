import { PartialType } from '@nestjs/mapped-types';
import { CreatePenutupanDto } from './create-penutupan.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum StatusData {
    PENDING = 'Pending',
    SELESAI = 'Selesai',
}

export class UpdatePenutupanDto extends PartialType(CreatePenutupanDto) {
    @IsString()
    @IsNotEmpty()
    @IsEnum(StatusData)
    readonly statusData: StatusData;
}
