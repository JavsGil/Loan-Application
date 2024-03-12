export interface AuthRepository {
    generateToken(username: string): Promise<string>;
  }
  