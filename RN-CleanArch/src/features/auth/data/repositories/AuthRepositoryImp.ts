import ILocalStorageService from '../../../../core/services/storageServices/ILocalStorageService';
import { IAuthRepository } from '../../domain/repositories/IAuthRepository';

export class AuthRepositoryImp implements IAuthRepository {
  private localeStorageService: ILocalStorageService;
  constructor(localStorage: ILocalStorageService) {
    this.localeStorageService = localStorage;
  }
  logout(): Promise<void> {
    return Promise.resolve();
  }

  async checkAuth(): Promise<boolean> {
    return await this.localeStorageService
      .getItem('authToken')
      .then((token: string | null) => {
        return Promise.resolve(token !== null);
      });
  }

  login(login: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (login === 'user' && password === 'password') {
          this.localeStorageService.setItem('authToken', 'dummy-token');
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }
}
