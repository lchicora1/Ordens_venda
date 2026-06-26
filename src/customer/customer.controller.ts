import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  @Post()
  create(
    @Body()
    body: {
      name: string;
      document: string;
    },
  ) {
    return this.customerService.create(body);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Post(':id/transports')
  addTransport(
    @Param('id') customerId: string,
    @Body() body: { transportId: string },
  ) {
    return this.customerService.addTransport(
      customerId,
      body.transportId,
    );
  }

  @Get(':id/transports')
  findTransports(
    @Param('id') customerId: string,
  ) {
    return this.customerService.findTransports(
      customerId,
    );
  }
}