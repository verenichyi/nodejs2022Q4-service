import { Injectable } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import DB from '../utils/DB/DB';

@Injectable()
export class UsersService {
  constructor(private database: DB) {}
  async getAllUsers() {
    return this.database.users.findMany();
  }

  async createUser(user: CreateUserDto) {
    return this.database.users.create(user);
  }
}
