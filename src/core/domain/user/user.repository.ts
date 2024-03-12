// user.repository.ts
import { CreateUserDto } from 'src/adapters/user/dto/user.dto';
import { User } from '../../infrastructure/enities/user.entity';

export interface UserRepository {
  createUser(createUserData: CreateUserDto): Promise<User>;
  findUserById(id: string): Promise<User | null>;
  findUserByUsername(username: string): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
}
