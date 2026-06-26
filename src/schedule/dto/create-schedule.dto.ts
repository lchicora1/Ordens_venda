import {
  IsDateString,
  IsString,
} from 'class-validator';

export class CreateScheduleDto {
  @IsDateString()
  deliveryDate!: string;

  @IsString()
  windowStart!: string;

  @IsString()
  windowEnd!: string;
}