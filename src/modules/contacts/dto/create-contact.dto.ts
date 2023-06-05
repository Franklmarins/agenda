import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
    default: 'Contato teste',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do contato',
    type: String,
    default: 'ContatoTeste@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telefone do contato',
    type: String,
    default: '999999999',
  })
  @IsString()
  @MinLength(9)
  phone: string;
}
