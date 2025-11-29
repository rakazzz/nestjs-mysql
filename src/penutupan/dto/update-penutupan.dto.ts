import { PartialType } from '@nestjs/mapped-types';
import { CreatePenutupanDto } from './create-penutupan.dto';

export class UpdatePenutupanDto extends PartialType(CreatePenutupanDto) {}
