import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { UserController } from '../../../adapters/user/user.controller';
import { User } from '../../infrastructure/enities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
