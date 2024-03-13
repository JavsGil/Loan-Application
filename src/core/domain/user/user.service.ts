import { Injectable } from '@nestjs/common';
import { User } from '../../infrastructure/entities/user.entity';
import { CreateUserDto } from '../../../adapters/user/dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserData: CreateUserDto): Promise<User> {
    return this.userRepository.create(createUserData);
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async findAllUsers(): Promise<User[] | null> {
    return this.userRepository.findAll();
  }
}
