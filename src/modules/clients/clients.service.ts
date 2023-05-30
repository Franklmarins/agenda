import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private clientRepository: ClientsRepository) {}
  async create(createClientDto: CreateClientDto) {
    const client = await this.clientRepository.create(createClientDto);

    return client;
  }

  async findAll() {
    const teste = 'teste';
    return this.clientRepository;
  }

  async findOne(id: string) {
    const user = await this.clientRepository.findOne(id);

    return user;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const user = await this.clientRepository.update(id, updateClientDto);

    return user;
  }

  async remove(id: string) {
    await this.clientRepository.delete(id);
    return;
  }
}
