import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransportDto } from './dto/create-transport.dto';

@Injectable()
export class TransportService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTransportDto) {
    return this.prisma.transportType.create({
      data,
    });
  }

  findAll() {
    return this.prisma.transportType.findMany();
  }
}