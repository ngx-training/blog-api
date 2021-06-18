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
    return this.tagRepository.save(createTagDto);
  }

  async findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    return this.tagRepository.findOne(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  async remove(id: number): Promise<void> {
    await this.tagRepository.delete(id);
  }
}
