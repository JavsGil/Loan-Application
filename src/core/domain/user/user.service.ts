// user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from '../../infrastructure/enities/user.entity';
import { CreateUserDto } from '../../../adapters/user/dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserData: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserData);
  }

  async findUserById(id: string): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findUserByUsername(username);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findUserByEmail(email);
  }
}
