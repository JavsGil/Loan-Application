import { Injectable } from '@nestjs/common';
import { ApplicationEntity } from '../../infrastructure/enities/application.entity';
import { ApplicationRepository } from './application.repository';
import { CreateApplicationDto } from 'src/adapters/appliccations/dto/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async findById(id: number): Promise<ApplicationEntity | undefined> {
    return this.applicationRepository.findById(id);
  }

  async create(createApplicationDto): Promise<ApplicationEntity> {
    const { applicantName, amount } = createApplicationDto;
    const application = new ApplicationEntity();
    application.name = applicantName;
    application.amount = amount;
    return this.applicationRepository.create(application);
  }

  async search(applicantName: string): Promise<ApplicationEntity[]> {
    return this.applicationRepository.search(applicantName);
  }

  async update(id: number, data: Partial<ApplicationEntity>): Promise<ApplicationEntity | undefined> {
    return this.applicationRepository.update(id, data);
  }

  async delete(id: number): Promise<boolean> {
    return this.applicationRepository.delete(id);
  }



}
