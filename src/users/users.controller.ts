import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/create-user.dto';
import User from './interfaces/user.interface';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }
}
