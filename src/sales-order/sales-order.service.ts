import { FilterSalesOrderDto } from './dto/filter-sales-order.dto';
import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';

@Injectable()
export class SalesOrderService {
  constructor(
    private prisma: PrismaService,
    private auditService: AuditService,
  ) {}

  async create(dto: CreateSalesOrderDto) {
    const authorization =
      await this.prisma.customerTransport.findUnique({
        where: {
          customerId_transportId: {
            customerId: dto.customerId,
            transportId: dto.transportId,
          },
        },
      });

    if (!authorization) {
      throw new BadRequestException(
        'Tipo de transporte não autorizado para este cliente',
      );
    }

    const order =
      await this.prisma.salesOrder.create({
        data: {
          customerId: dto.customerId,
          transportId: dto.transportId,

          items: {
            create: dto.items.map((item) => ({
              itemId: item.itemId,
              quantity: item.quantity,
            })),
          },
        },
        include: {
          customer: true,
          transport: true,
          items: {
            include: {
              item: true,
            },
          },
        },
      });

    await this.auditService.log(
      'CREATE',
      'SalesOrder',
      null,
      order,
      order.id,
    );

    return order;
  }

  findAll(filters: FilterSalesOrderDto) {
  return this.prisma.salesOrder.findMany({
    where: {
      status: filters.status as any,
      customerId: filters.customerId,
      transportId: filters.transportId,
    },
    include: {
      customer: true,
      transport: true,
      items: {
        include: {
          item: true,
        },
      },
      schedule: true,
    },
  });
}

  async updateStatus(
    id: string,
    newStatus: string,
  ) {
    const order =
      await this.prisma.salesOrder.findUnique({
        where: { id },
      });

    if (!order) {
      throw new BadRequestException(
        'Ordem não encontrada',
      );
    }

    const flow = [
      'CRIADA',
      'PLANEJADA',
      'AGENDADA',
      'EM_TRANSPORTE',
      'ENTREGUE',
    ];

    const currentIndex =
      flow.indexOf(order.status);

    const newIndex =
      flow.indexOf(newStatus);

    if (newIndex !== currentIndex + 1) {
      throw new BadRequestException(
        `Transição inválida: ${order.status} -> ${newStatus}`,
      );
    }

    const updated =
      await this.prisma.salesOrder.update({
        where: { id },
        data: {
          status: newStatus as any,
        },
      });

    await this.auditService.log(
      'STATUS_CHANGE',
      'SalesOrder',
      { status: order.status },
      { status: newStatus },
      order.id,
    );

    return updated;
  }
}