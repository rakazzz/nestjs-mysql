import { PartialType } from '@nestjs/mapped-types';
import { CreatePenguburanDto } from './create-penguburan.dto';

export class UpdatePenguburanDto extends PartialType(CreatePenguburanDto) {}
