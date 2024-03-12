import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './core/domain/auth/auth.module';
import { UserModule } from './core/domain/user/user.module';
import { ApplicationModule } from './core/domain/application/aplication.module';
import { DatabaseModule } from './core/infrastructure/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          type: 'postgres',
          url: configService.get('database.url'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
          logging: configService.get('database.logging'),
      })
    }),
    AuthModule,
    UserModule,
    ApplicationModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

