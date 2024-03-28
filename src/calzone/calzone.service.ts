import { Injectable } from '@nestjs/common';
import { CreateCalzoneDto } from './dto/create-calzone.dto';
import { UpdateCalzoneDto } from './dto/update-calzone.dto';

@Injectable()
export class CalzoneService {
  create(createCalzoneDto: CreateCalzoneDto) {
    return 'This action adds a new calzone';
  }

  findAll() {
    return `This action returns all calzone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calzone`;
  }

  update(id: number, updateCalzoneDto: UpdateCalzoneDto) {
    return `This action updates a #${id} calzone`;
  }

  remove(id: number) {
    return `This action removes a #${id} calzone`;
  }
}
