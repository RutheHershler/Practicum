import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.services';

@Controller()
export class userController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return "popopop";
  }
}
