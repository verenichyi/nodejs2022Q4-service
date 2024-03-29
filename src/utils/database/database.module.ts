import { Global, Module } from '@nestjs/common';
import DB from './database';

@Global()
@Module({
  providers: [DB],
  exports: [DB],
})
export class Database {}
