import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('users')
  async signUpUser(
    @Body() userData: { name: string, email: string, password: string }
  ): Promise<User> {
    return this.userService.createUser({ ...userData, createdAt: new Date(), updatedAt: new Date() });
  }
}
