import { UpdateScheduleDto } from './dto/update-schedule.dto';

import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(
    orderId: string,
    dto: CreateScheduleDto,
  ) {
    const order =
      await this.prisma.salesOrder.findUnique({
        where: {
          id: orderId,
        },
      });

    if (!order) {
      throw new BadRequestException(
        'Ordem não encontrada',
      );
    }

    return this.prisma.schedule.create({
      data: {
        orderId,
        deliveryDate: new Date(
          dto.deliveryDate,
        ),
        windowStart: dto.windowStart,
        windowEnd: dto.windowEnd,
      },
    });
  }

  async confirm(id: string) {
    const schedule =
      await this.prisma.schedule.findUnique({
        where: { id },
      });

    if (!schedule) {
      throw new BadRequestException(
        'Agendamento não encontrado',
      );
    }

    return this.prisma.schedule.update({
      where: { id },
      data: {
        confirmed: true,
      },
    });
  }

  async update(
  id: string,
  dto: UpdateScheduleDto,
) {
  const schedule =
    await this.prisma.schedule.findUnique({
      where: { id },
    });

  if (!schedule) {
    throw new BadRequestException(
      'Agendamento não encontrado',
    );
  }

  return this.prisma.schedule.update({
    where: { id },
    data: {
      deliveryDate: dto.deliveryDate
        ? new Date(dto.deliveryDate)
        : undefined,
      windowStart: dto.windowStart,
      windowEnd: dto.windowEnd,
      confirmed: false,
    },
  });
}
}