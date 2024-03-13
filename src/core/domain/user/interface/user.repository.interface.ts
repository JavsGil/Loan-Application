import { CreateUserDto } from "src/adapters/user/dto/user.dto";
import { User } from "src/core/infrastructure/entities/user.entity";

export interface IUserRepository {

    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(user: CreateUserDto): Promise<User>;

  }