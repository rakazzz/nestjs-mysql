import { PartialType } from '@nestjs/mapped-types';
import { CreateJandaFormDto } from './create-janda-form.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum StatusData {
    PENDING = 'Pending',
    SELESAI = 'Selesai',
}

export class UpdateJandaFormDto extends PartialType(CreateJandaFormDto) {

    @IsString()
    @IsNotEmpty()
    @IsEnum(StatusData)
    readonly statusData: StatusData;


}
