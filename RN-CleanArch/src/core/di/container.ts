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
    'eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIyODlkMTI2Ni02YWU0LTQ3MzMtOGMzMS00Nzk3YjNhOTFmOWMiLCJpc3MiOiJodHRwczovL2dsb2JlcHJvbW90ZXJzLmIyY2xvZ2luLmNvbS9jZGJlYTE1Mi1hNzU2LTRmZGUtOTZiMS00MzkxNDc5MDM0NWUvdjIuMC8iLCJleHAiOjE3NzgyMzM3MjYsIm5iZiI6MTc3ODIzMDEyNiwib2lkIjoiNTcwZWZkM2YtYzQ1Ni00MTczLWI3ZjUtZjVhYjlhMWUzNTZiIiwic3ViIjoiNTcwZWZkM2YtYzQ1Ni00MTczLWI3ZjUtZjVhYjlhMWUzNTZiIiwiZ2l2ZW5fbmFtZSI6IlNvbmlhIiwiZmFtaWx5X25hbWUiOiJLQVBDSEUgS0FNR0FhIiwibmFtZSI6IlNvbmlhIEtBUENIRSBLQU1HQWEiLCJlbWFpbHMiOlsic2thbWdhQGdsb2JlLWdyb3VwZS5jb20iXSwidGZwIjoiQjJDXzFfU1VTSSIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwiLCJhenAiOiI4MDkzMDVjNS02M2ZmLTRiNzEtYWZjMS0wMjI5MDQzYmI4NDEiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3NzgyMzAxMjZ9.YCMHjcGij793qKdOQCbpw934AoREtuhL8WORJ-45M0fDem5UOm4dJOsqRc4tadhoF1tXAyf284niO-EJqBYBIsMcndmxCYWDzMF0hJjA_kB7FqEGskXUZy4_J-TaIs3Dy55P0INDcNPPzwD2zqu9nsAJaS3db17rXPBqgmAHj1lKdt5XMV85kgn-UtiHNxzGs6bajk2DQnOb0Rn04jIlSvk27pBk18q8FNIK4OUhfKZlJVmET1ZSL77ZDAa_bnXprKTwcQR3Z6W4hT6KcbiXeaJV5-GUIj9PrZOsop5CzUZMjVVAUelW6uf_CumibcQb24GtHmNZgNGRQlanHcF3qQ',
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
