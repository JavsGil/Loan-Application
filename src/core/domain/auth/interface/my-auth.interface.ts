export interface IMyAuthRepository {
    generateToken(username: string): Promise<string>;
  }