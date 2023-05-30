import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.clientRepository;
  }

  async findOne(id: string) {
    const client = await this.clientRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return await this.clientRepository.update(id, updateClientDto);
  }

  async remove(id: string) {
    const client = await this.clientRepository.findOne(id);

    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return await this.clientRepository.delete(id);
  }
}
