import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './customer/customer.module';
import { TransportModule } from './transport/transport.module';
import { ItemModule } from './item/item.module';
import { SalesOrderModule } from './sales-order/sales-order.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [PrismaModule, CustomerModule, TransportModule, ItemModule, SalesOrderModule, ScheduleModule, AuditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
