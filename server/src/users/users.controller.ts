import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';


@Controller()
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) { }

  @Post('users')
  async signUpUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return this.userService.createUser({ ...createUserDto, createdAt: new Date(), updatedAt: new Date() });
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userService.findAll()
  }
}