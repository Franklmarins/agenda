import { randomUUID } from 'crypto';

export class Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  password: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
