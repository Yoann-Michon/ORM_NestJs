import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PizzasService {

  constructor(@InjectRepository(Pizza) private data: Repository<Pizza>){}

  async create(dto:CreatePizzaDto):Promise<Pizza> {
    try {
      return await this.data.save(dto);
    } catch (error) {
      throw new ConflictException();
    }
  }

  async findAll():Promise<Pizza[]>  {
    try {
      return await this.data.find();
    } catch (error) {
      throw new ConflictException();
    }
  }

  async findOne(id: number):Promise<Pizza>  {
    try {
      return await this.data.findOneBy({id})
    } catch (error) {
      throw new ConflictException();
    }
  }

  async update(id: number, dto: UpdatePizzaDto):Promise<Pizza>  {
    let done = await this.data.update(id,dto);
    if (done.affected !=1)
      throw new NotFoundException(id)
    return this.findOne(id)
  }

  async remove(id: number):Promise<void>  {
    let done: DeleteResult = await this.data.delete(id);
    if(done.affected !=1)
      throw new NotFoundException(id)
  }
}
