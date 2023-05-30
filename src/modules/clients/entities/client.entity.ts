import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
