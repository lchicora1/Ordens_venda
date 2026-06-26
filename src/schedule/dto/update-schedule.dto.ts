import {
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateScheduleDto {
  @IsOptional()
  @IsDateString()
  deliveryDate?: string;

  @IsOptional()
  @IsString()
  windowStart?: string;

  @IsOptional()
  @IsString()
  windowEnd?: string;
}