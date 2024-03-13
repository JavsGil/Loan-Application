import { ApplicationEntity } from "src/core/infrastructure/entities/application.entity";

export interface IApplicationRepository {
  findById(id: number): Promise<ApplicationEntity | undefined>;
  create(application: ApplicationEntity): Promise<ApplicationEntity>;
  update(id: number, data: Partial<ApplicationEntity>): Promise<ApplicationEntity | undefined>;
  delete(id: number): Promise<boolean>;
  search(applicantName: string): Promise<ApplicationEntity[]>;
}