import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientsRepository) {}
  async create(createClientDto: CreateClientDto) {
    const client = await this.clientsRepository.create(createClientDto);

    return client;
  }

  async findAll() {
    return this.clientsRepository.findAll();
  }

  async findOne(id: string) {
    const client = await this.clientsRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  async findByEmail(email: string) {
    const client = await this.clientsRepository.findByEmail(email);
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientsRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return await this.clientsRepository.update(id, updateClientDto);
  }

  async remove(id: string) {
    const client = await this.clientsRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return await this.clientsRepository.delete(id);
  }
}
