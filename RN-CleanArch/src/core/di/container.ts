import { LoginUseCase } from '../../features/auth/domain/useCases/LoginUseCase';
import { AuthRepositoryImp } from '../../features/auth/data/repositories/AuthRepositoryImp';
import { LogoutUseCase } from '../../features/auth/domain/useCases/LogoutUseCase';
import { CheckAuthUseCase } from '../../features/auth/domain/useCases/CheckAuthUseCase';
import { IAuthRepository } from '../../features/auth/domain/repositories/IAuthRepository';
import { HttpService } from '../httpServices/HttpService';
import { IHttpService } from '../httpServices/IHttpService';
import IHomeRepository from '../../features/home/domain/repositories/IHomeRepository';
import HomeRepository from '../../features/home/data/repositories/HomeRepository';
import GetCurrentMissionUseCase from '../../features/home/domain/useCases/GetCurrentMissionUseCase';
import GetUpComingMissionUseCase from '../../features/home/domain/useCases/GetUpComingMissionUseCase';

class Container {
  private instances = new Map<string, any>();

  register<T>(key: string, instance: T) {
    this.instances.set(key, instance);
  }

  resolve<T>(key: string): T {
    const instance = this.instances.get(key);
    if (!instance) {
      throw new Error(`Dependency ${key} not found`);
    }
    return instance;
  }
}

export const container = new Container();

container.register<IHttpService>(
  'HttpService',
  new HttpService(
    'https://338a-2a01-e0a-a1f-9c20-6c9d-673-e2f5-6b69.ngrok-free.app',
    'eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIyODlkMTI2Ni02YWU0LTQ3MzMtOGMzMS00Nzk3YjNhOTFmOWMiLCJpc3MiOiJodHRwczovL2dsb2JlcHJvbW90ZXJzLmIyY2xvZ2luLmNvbS9jZGJlYTE1Mi1hNzU2LTRmZGUtOTZiMS00MzkxNDc5MDM0NWUvdjIuMC8iLCJleHAiOjE3NzgyNzM3MTEsIm5iZiI6MTc3ODI3MDExMSwib2lkIjoiNTcwZWZkM2YtYzQ1Ni00MTczLWI3ZjUtZjVhYjlhMWUzNTZiIiwic3ViIjoiNTcwZWZkM2YtYzQ1Ni00MTczLWI3ZjUtZjVhYjlhMWUzNTZiIiwiZ2l2ZW5fbmFtZSI6IlNvbmlhIiwiZmFtaWx5X25hbWUiOiJLQVBDSEUgS0FNR0FhIiwibmFtZSI6IlNvbmlhIEtBUENIRSBLQU1HQWEiLCJlbWFpbHMiOlsic2thbWdhQGdsb2JlLWdyb3VwZS5jb20iXSwidGZwIjoiQjJDXzFfU1VTSSIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwiLCJhenAiOiI4MDkzMDVjNS02M2ZmLTRiNzEtYWZjMS0wMjI5MDQzYmI4NDEiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3NzgyNzAxMTF9.LmLD4gTg9wvxDTwfBN1QwzzWvOeejndYx16m4YiTzfn3jxYfgiCxzq0CZPvECxYGZ4PU3R0GhJG1LULKthdpCLNAMt7St5XOF0Rug64VwUEPjCc0oypkGLGGJS6OsA1jxeyVnMSSv63LG2ZqKsDHtWK-GYB9TaxhKPT8RusiK36CIb2HOFW-08PiTzkpWIKRG0P4N7Seho7dIcbuez_j8SQyxoEoW8Q2cSbaGpK5CvE2K3p8S6D4cT5OKhH5LbPLGWWl9HbQ0mCVx5Et5pBh5SJj4eFD3I1a-qTCjooTcphunhJfNvOkyU8fnvIHCLUEa4BCVxCMKR3wavqtVMJ5UA',
  ),
);

container.register<IAuthRepository>('AuthRepository', new AuthRepositoryImp());

container.register<LoginUseCase>(
  'LoginUseCase',
  new LoginUseCase(container.resolve('AuthRepository')),
);

container.register<LogoutUseCase>(
  'LogoutUseCase',
  new LogoutUseCase(container.resolve('AuthRepository')),
);

container.register<CheckAuthUseCase>(
  'CheckAuthUseCase',
  new CheckAuthUseCase(container.resolve('AuthRepository')),
);

container.register<IHomeRepository>(
  'HomeRepository',
  new HomeRepository(container.resolve('HttpService')),
);

container.register<GetCurrentMissionUseCase>(
  'GetCurrentMissionUseCase',
  new GetCurrentMissionUseCase(container.resolve('HomeRepository')),
);

container.register<GetUpComingMissionUseCase>(
  'GetUpComingMissionUseCase',
  new GetUpComingMissionUseCase(container.resolve('HomeRepository')),
);
