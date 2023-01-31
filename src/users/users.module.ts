import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Database } from '../utils/DB/database.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [Database],
  exports: [],
})
export class UsersModule {}
