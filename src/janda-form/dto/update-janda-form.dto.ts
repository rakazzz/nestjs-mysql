import { PartialType } from '@nestjs/mapped-types';
import { CreateJandaFormDto } from './create-janda-form.dto';

export class UpdateJandaFormDto extends PartialType(CreateJandaFormDto) {}
