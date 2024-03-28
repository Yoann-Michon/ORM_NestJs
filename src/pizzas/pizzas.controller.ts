import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  async create(@Body() createPizzaDto: CreatePizzaDto):Promise<Pizza> {
      return await this.pizzasService.create(createPizzaDto);
  }

  @Get()
  async findAll() {
      return await this.pizzasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      return await this.pizzasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
      return await this.pizzasService.update(+id, updatePizzaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      return await this.pizzasService.remove(+id);
  }
}
