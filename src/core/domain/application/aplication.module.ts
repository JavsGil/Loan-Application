import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationService } from './application.service';
import { ApplicationsController } from 'src/adapters/appliccations/application.controller';
import { ApplicationEntity } from '../../infrastructure/entities/application.entity';
import { ApplicationRepository } from './application.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity])], 
  controllers: [ApplicationsController],
  providers: [ApplicationRepository,ApplicationService],
  exports: [ApplicationRepository,ApplicationService],
})
export class ApplicationModule {}
