import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JandaFormModule } from 'src/janda-form/janda-form.module';
import { PenguburanModule } from 'src/penguburan/penguburan.module';
import { PenutupanModule } from 'src/penutupan/penutupan.module';
import { KeramaianModule } from 'src/keramaian/keramaian.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JandaFormModule, PenguburanModule, PenutupanModule, KeramaianModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
