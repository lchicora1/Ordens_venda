import { IsInt, IsString, Min } from 'class-validator';

export class CreateSalesOrderItemDto {
  @IsString()
  itemId: string;

  @IsInt()
  @Min(1)
  quantity: number;
}