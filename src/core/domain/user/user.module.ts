
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { User } from 'src/core/infrastructure/entities/user.entity';
import { UserController } from 'src/adapters/user/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository,UserService],
  controllers: [UserController],
  exports: [UserRepository,UserService],
})
export class UserModule {}
