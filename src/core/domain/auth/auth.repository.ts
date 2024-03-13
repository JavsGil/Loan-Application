import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { IMyAuthRepository } from './interface/my-auth.interface'; // Importa la interfaz

@Injectable()
export class MyAuthRepository implements IMyAuthRepository { // Implementa la interfaz
  constructor(private readonly configService: ConfigService) {}

  async generateToken(username: string): Promise<string> {
    const payload = { username };
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = '1h';

    const token = jwt.sign(payload, secret, { expiresIn });

    return token;
  }
}
