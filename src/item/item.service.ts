import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateItemDto) {
    return this.prisma.item.create({
      data,
    });
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: string) {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }
}