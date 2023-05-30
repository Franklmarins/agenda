import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientsRepository } from '../clients.repository';

export class ClientInMemoryRepository implements ClientsRepository {
  private database: Client[] = [];
  create(data: CreateClientDto): Promise<Client> | Client {
    const newClient = new Client();
    Object.assign(newClient, { ...data });

    this.database.push(newClient);

    return newClient;
  }
  findAll(): Client[] | Promise<Client[]> {
    const clients = this.database;

    return clients;
  }
  findOne(id: string): Client | Promise<Client> {
    const client = this.database.find((client) => client.id == id);

    return client;
  }
  update(id: string, data: UpdateClientDto): Client | Promise<Client> {
    const clientIndex = this.database.findIndex((client) => client.id == id);

    this.database[clientIndex] = { ...this.database[clientIndex], ...data };

    return this.database[clientIndex];
  }
  delete(id: string): void | Promise<void> {
    const clientIndex = this.database.findIndex((client) => client.id == id);

    this.database.splice(clientIndex, 1);
    return;
  }
}
