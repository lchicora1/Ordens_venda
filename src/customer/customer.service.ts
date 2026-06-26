import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  create(data: {
    name: string;
    document: string;
  }) {
    return this.prisma.customer.create({
      data,
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({
      where: {
        id,
      },
    });
  }

  async addTransport(
    customerId: string,
    transportId: string,
  ) {
    return this.prisma.customerTransport.create({
      data: {
        customerId,
        transportId,
      },
    });
  }

  async findTransports(
    customerId: string,
  ) {
    return this.prisma.customerTransport.findMany({
      where: {
        customerId,
      },
      include: {
        transport: true,
      },
    });
  }
}