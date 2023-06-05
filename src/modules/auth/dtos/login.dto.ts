import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: 'teste@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: '12345678',
  })
  @IsString()
  password: string;
}
