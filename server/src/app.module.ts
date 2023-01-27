import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [UsersModule, AuthModule, TablesModule],
})
export class AppModule {}
