import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return "pop"
  }
}
