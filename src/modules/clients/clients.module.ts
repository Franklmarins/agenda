import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './repositories/clients.repository';
import { ClientInMemoryRepository } from './repositories/in-memory/clients.in-memory.repository';

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService,
    { provide: ClientsRepository, useClass: ClientInMemoryRepository },
  ],
})
export class ClientsModule {}
