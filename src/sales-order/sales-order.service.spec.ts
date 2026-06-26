import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuditService } from '../audit/audit.service';
import { PrismaService } from '../prisma/prisma.service';
import { SalesOrderService } from './sales-order.service';

describe('SalesOrderService', () => {
  let service: SalesOrderService;

  const prismaMock = {
    customerTransport: {
      findUnique: jest.fn(),
    },
    salesOrder: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  };

  const auditMock = {
    log: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule({
        providers: [
          SalesOrderService,
          {
            provide: PrismaService,
            useValue: prismaMock,
          },
          {
            provide: AuditService,
            useValue: auditMock,
          },
        ],
      }).compile();

    service =
      module.get<SalesOrderService>(
        SalesOrderService,
      );

    jest.clearAllMocks();
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve impedir criar ordem quando a transportadora não é autorizada', async () => {
    prismaMock.customerTransport.findUnique.mockResolvedValue(
      null,
    );

    await expect(
      service.create({
        customerId: '1',
        transportId: '2',
        items: [],
      }),
    ).rejects.toThrow(
      BadRequestException,
    );
  });

  it('deve permitir transição válida', async () => {
    prismaMock.salesOrder.findUnique.mockResolvedValue(
      {
        id: '1',
        status: 'CRIADA',
      },
    );

    prismaMock.salesOrder.update.mockResolvedValue(
      {
        id: '1',
        status: 'PLANEJADA',
      },
    );

    const result =
      await service.updateStatus(
        '1',
        'PLANEJADA',
      );

    expect(result.status).toBe(
      'PLANEJADA',
    );
  });

  it('deve impedir transição inválida', async () => {
    prismaMock.salesOrder.findUnique.mockResolvedValue(
      {
        id: '1',
        status: 'CRIADA',
      },
    );

    await expect(
      service.updateStatus(
        '1',
        'ENTREGUE',
      ),
    ).rejects.toThrow(
      BadRequestException,
    );
  });
});