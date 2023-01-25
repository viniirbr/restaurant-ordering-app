import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';


@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  @Post('users')
  async signUpUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return this.usersService.createUser({ ...createUserDto, createdAt: new Date(), updatedAt: new Date() });
  }

  @Get('users')
  async retrieveAllUsers(): Promise<User[]> {
    return this.usersService.findAll()
  }
}