import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './core/domain/auth/auth.module';
import { UserModule } from './core/domain/user/user.module';
import { ApplicationModule } from './core/domain/application/aplication.module';
import { DatabaseModule } from './core/infrastructure/database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), // Configuración de la conexión a la base de datos
    AuthModule,
    UserModule,
    ApplicationModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

