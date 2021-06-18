import { forwardRef, Inject, Injectable, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService implements OnModuleInit, OnModuleDestroy, OnApplicationShutdown {

  onModuleInit() {
    console.log('This module has been initialized');
  }

  onModuleDestroy() {
    console.log('This module was destryoed');
  }

  onApplicationShutdown(signal: string) {
    console.log(signal);
  }

  create(createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  findAll() {
    return `This action returns all tag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
