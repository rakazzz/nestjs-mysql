import { Module } from '@nestjs/common';
import { JandaFormService } from './janda-form.service';
import { JandaFormController } from './janda-form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JandaForm } from './entities/janda-form.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([JandaForm, User])],
  controllers: [JandaFormController],
  providers: [JandaFormService],
})
export class JandaFormModule {}
