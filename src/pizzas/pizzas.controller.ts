import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('pizzas')
export class PizzasController {
  @Get()
  // findAll(@Res() res) { res.status(200).send('hello world'); }
  findAll() {
    return 'Returns all pizzas';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This actions returns ${id}`;
  }

  @Post()
  create(@Body() body): string {
    return body;
  }
}
