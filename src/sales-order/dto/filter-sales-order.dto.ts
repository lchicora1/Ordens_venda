import {
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterSalesOrderDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  customerId?: string;

  @IsOptional()
  @IsString()
  transportId?: string;
}