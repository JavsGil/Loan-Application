import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MyAuthRepository } from './auth.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [MyAuthRepository],
  exports: [MyAuthRepository],
})
export class AuthModule {}
