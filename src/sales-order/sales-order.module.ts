import { Module } from '@nestjs/common';
import { SalesOrderController } from './sales-order.controller';
import { SalesOrderService } from './sales-order.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [
    PrismaModule,
    AuditModule,
  ],
  controllers: [SalesOrderController],
  providers: [SalesOrderService],
})
export class SalesOrderModule {}