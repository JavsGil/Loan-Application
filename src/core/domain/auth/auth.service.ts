import { Injectable } from '@nestjs/common';
import { MyAuthRepository } from './auth.repository';
import { LoginDto } from '../../../adapters/auth/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: MyAuthRepository) {}

  async login(loginDto: LoginDto): Promise<string> {
    const { email, password } = loginDto;
    if (await this.verifyCredentials(email, password)) {
      const token = await this.authRepository.generateToken(email);
      return token;
    } else {
      throw new Error('Inválid credentials');
    }
  }

  private async verifyCredentials(email: string, password: string): Promise<boolean> {
    return email === 'admin' && password === 'admin';
  }
}
