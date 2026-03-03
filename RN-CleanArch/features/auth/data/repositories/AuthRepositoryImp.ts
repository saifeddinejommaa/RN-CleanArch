import { IAuthRepository } from '../../domain/repositories/IAuthRepository';

export class AuthRepositoryImp implements IAuthRepository {
  logout(): Promise<void> {
    return Promise.resolve();
  }

  checkAuth(): Promise<boolean> {
    return Promise.resolve(false);
  }

  login(login: string, password: string): Promise<boolean> {
    console.log('AuthRepositoryImp.login called');
    return Promise.resolve(true);
  }
}
