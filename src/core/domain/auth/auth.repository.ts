import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyAuthRepository {
  constructor(private readonly configService: ConfigService) {}

  async generateToken(username: string): Promise<string> {
    const payload = { username };
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = '1h';

    const token = jwt.sign(payload, secret, { expiresIn });

    return token;
  }
}
