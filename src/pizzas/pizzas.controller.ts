import { Controller, Get, Param } from '@nestjs/common';

@Controller('pizzas')
export class PizzasController {
  @Get()
  findAll() {
    return 'Returns all pizzas';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This actions returns ${id}`;
  }
}
