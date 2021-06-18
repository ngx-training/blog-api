import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TagrangePipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    return value < 10;
  }
}
