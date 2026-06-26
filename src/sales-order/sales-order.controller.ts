import { Query } from '@nestjs/common';
import { FilterSalesOrderDto } from './dto/filter-sales-order.dto';

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SalesOrderService } from './sales-order.service';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('sales-orders')
export class SalesOrderController {
  constructor(
    private readonly salesOrderService: SalesOrderService,
  ) {}

  @Post()
  create(@Body() dto: CreateSalesOrderDto) {
    return this.salesOrderService.create(dto);
  }

  @Get()
findAll(
  @Query() filters: FilterSalesOrderDto,
) {
  return this.salesOrderService.findAll(filters);
}
  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto,
  ) {
    return this.salesOrderService.updateStatus(
      id,
      dto.status,
    );
  }
}