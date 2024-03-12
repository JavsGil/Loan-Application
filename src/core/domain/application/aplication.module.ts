import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationService } from './application.service';
import { ApplicationsController } from 'src/adapters/appliccations/application.controller';
import { ApplicationEntity } from '../../infrastructure/enities/application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationEntity])], 
  controllers: [ApplicationsController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
