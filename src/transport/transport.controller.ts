import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransportService } from './transport.service';
import { CreateTransportDto } from './dto/create-transport.dto';

@Controller('transports')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Post()
  create(@Body() dto: CreateTransportDto) {
    return this.transportService.create(dto);
  }

  @Get()
  findAll() {
    return this.transportService.findAll();
  }
}