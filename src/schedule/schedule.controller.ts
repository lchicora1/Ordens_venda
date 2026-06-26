import { UpdateScheduleDto } from './dto/update-schedule.dto';

import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
  ) {}

  @Post(':orderId')
  create(
    @Param('orderId') orderId: string,
    @Body() dto: CreateScheduleDto,
  ) {
    return this.scheduleService.create(
      orderId,
      dto,
    );
  }

  @Patch(':id/confirm')
  confirm(
    @Param('id') id: string,
  ) {
    return this.scheduleService.confirm(id);
  }

  @Patch(':id')
update(
  @Param('id') id: string,
  @Body() dto: UpdateScheduleDto,
) {
  return this.scheduleService.update(
    id,
    dto,
  );
}
}