import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from 'src/core/infrastructure/entities/application.entity';
import { IApplicationRepository } from './interface/application.repository.interface';

@Injectable()
export class ApplicationRepository implements IApplicationRepository {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly applicationRepository: Repository<ApplicationEntity>,
  ) {}

  async findById(id: number): Promise<ApplicationEntity | undefined> {
    return await this.applicationRepository.findOne({ where: { id } });
  }

  async create(application: ApplicationEntity): Promise<ApplicationEntity> {
    const newApplication = this.applicationRepository.create(application);
    return await this.applicationRepository.save(newApplication);
  }

  async update(
    id: number,
    data: Partial<ApplicationEntity>,
  ): Promise<ApplicationEntity | undefined> {
    await this.applicationRepository.update(id, data);
    return await this.applicationRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.applicationRepository.delete(id);
    return result.affected > 0;
  }

  async search(applicantName: string): Promise<ApplicationEntity[]> {
    return await this.applicationRepository
      .createQueryBuilder('application')
      .where('application.applicantName = :applicantName', { applicantName })
      .getMany();
  }
}
