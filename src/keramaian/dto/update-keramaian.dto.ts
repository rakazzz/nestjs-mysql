import { PartialType } from '@nestjs/mapped-types';
import { CreateKeramaianDto } from './create-keramaian.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum StatusData {
    PENDING = 'Pending',
    SELESAI = 'Selesai',
}

export class UpdateKeramaianDto extends PartialType(CreateKeramaianDto) {
        @IsString()
        @IsNotEmpty()
        @IsEnum(StatusData)
        readonly statusData: StatusData;
}
