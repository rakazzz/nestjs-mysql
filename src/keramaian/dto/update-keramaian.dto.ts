import { PartialType } from '@nestjs/mapped-types';
import { CreateKeramaianDto } from './create-keramaian.dto';

export class UpdateKeramaianDto extends PartialType(CreateKeramaianDto) {}
