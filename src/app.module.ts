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
import { KeramaianModule } from './keramaian/keramaian.module';
import { Keramaian } from './keramaian/entities/keramaian.entity';
import { Penutupan } from './penutupan/entities/penutupan.entity';
import { PenutupanModule } from './penutupan/penutupan.module';
import { AuthModule } from './auth/auth.module';
import { AccessModule } from './access/access.module';
import { Access } from './access/entity/access.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, JandaForm, Penguburan, Keramaian, Penutupan, Access],
      synchronize: true,
    }),
    UserModule,
    JandaFormModule,
    PenguburanModule,
    KeramaianModule,
    PenutupanModule,
    AuthModule,
    AccessModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
})
export class AppModule {}
