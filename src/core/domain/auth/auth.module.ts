// core/domain/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { AuthController } from '../../../adapters/auth/auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../infrastructure/enities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
