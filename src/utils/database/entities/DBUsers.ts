import * as uuid from 'uuid';
import DBEntity from './DBEntity';
import User from '../../../users/interfaces/user.interface';
import { CreateUserDto } from '../../../users/dto/create-user.dto';

type UpdateUserDto = Omit<User, 'id' | 'login' | 'createdAt'>;

export default class DBUsers extends DBEntity<
  User,
  UpdateUserDto,
  CreateUserDto
> {
  async create(dto: CreateUserDto) {
    const created: User = {
      id: uuid.v4(),
      ...dto,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.entities.push(created);
    return created;
  }
}
