import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { fstat, readFileSync } from 'fs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { Tag } from './tag/entities/tag.entity';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db-postgresql-nestjs-do-user-8362547-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'gregor',
      password: 'vzm78jmb6eijm1ti',
      database: 'gregordb',
      entities: [Tag],
      synchronize: true,
      ssl: {
        ca: readFileSync('ca-certificate.crt').toString()
      }
    }),
    TagModule
  ],
  controllers: [
    AppController, 
    CategoryController
  ],
  providers: [
    AppService, 
    CategoryService
  ],
})
export class AppModule {}
