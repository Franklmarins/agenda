import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDTO } from './dtos/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Body() client: LoginDTO) {
    return this.authService.login(client.email);
  }
}
