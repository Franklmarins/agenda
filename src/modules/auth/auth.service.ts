import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private clientsService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async validateClient(email: string, password: string) {
    const client = await this.clientsService.findByEmail(email);
    if (client) {
      const comparePassword = await compare(password, client.password);
      if (comparePassword) {
        return { email: client.email };
      }
    }
    return null;
  }

  async login(email: string) {
    const client = await this.clientsService.findByEmail(email);
    return { token: this.jwtService.sign({ email }, { subject: client.id }) };
  }
}
