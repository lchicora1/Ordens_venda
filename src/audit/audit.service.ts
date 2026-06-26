import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async log(
    action: any,
    entityName: string,
    oldValue: any,
    newValue: any,
    orderId?: string,
  ) {
    return this.prisma.auditLog.create({
      data: {
        action,
        entityName,
        oldValue: oldValue
          ? JSON.stringify(oldValue)
          : null,
        newValue: newValue
          ? JSON.stringify(newValue)
          : null,
        orderId,
      },
    });
  }
}