import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { JandaFormModule } from './janda-form/janda-form.module';
import { JandaForm } from './janda-form/entities/janda-form.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dbform',
      entities: [User, JandaForm],
      synchronize: true,
    }),
    UserModule,
    JandaFormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
