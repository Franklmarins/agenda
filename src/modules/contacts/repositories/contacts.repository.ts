import { UpdateClientDto } from 'src/modules/clients/dto/update-client.dto';
import { CreateContactDto } from '../dto/create-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactsRepository {
  abstract create(
    data: CreateContactDto,
    clienteId: string,
  ): Promise<Contact> | Contact;
  abstract findAll(): Promise<Contact[]> | Contact[];
  abstract findOne(id: string): Promise<Contact> | Contact;
  abstract update(
    id: string,
    data: UpdateClientDto,
  ): Promise<Contact> | Contact;
  abstract delete(id: string): Promise<void> | void;
}
