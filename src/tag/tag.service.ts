import { Injectable, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService implements OnModuleInit, OnModuleDestroy, OnApplicationShutdown {

  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

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
    return this.tagRepository.create(createTagDto);
    //return 'This action adds a new tag';
  }

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
    //return `This action returns all tag`;
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
