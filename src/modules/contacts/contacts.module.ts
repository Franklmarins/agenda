import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactsRepository } from './repositories/contacts.repository';
import { ContactInMemoryRepository } from './repositories/in-memory/contacts.in-memory.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    { provide: ContactsRepository, useClass: ContactInMemoryRepository },
  ],
})
export class ContactsModule {}
