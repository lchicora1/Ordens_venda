import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSalesOrderItemDto } from './create-sales-order-item.dto';

export class CreateSalesOrderDto {
  @IsString()
  customerId: string;

  @IsString()
  transportId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSalesOrderItemDto)
  items: CreateSalesOrderItemDto[];
}