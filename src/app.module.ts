import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { JandaFormModule } from './janda-form/janda-form.module';
import { JandaForm } from './janda-form/entities/janda-form.entity';
import { PenguburanModule } from './penguburan/penguburan.module';
import { Penguburan } from './penguburan/entities/penguburan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, JandaForm, Penguburan],
      synchronize: true,
    }),
    UserModule,
    JandaFormModule,
    PenguburanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
