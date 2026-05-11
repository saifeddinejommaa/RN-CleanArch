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
import GetAllMissionsUseCase from '../../features/search/domain/useCases/GetAllMissionsUseCase';
import ISearchRepository from '../../features/search/domain/repositories/searchRepository';
import SearchRepository from '../../features/search/data/repositories/SearchRepository';

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
    'https://ea2d-45-147-210-177.ngrok-free.app',
    'eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIyODlkMTI2Ni02YWU0LTQ3MzMtOGMzMS00Nzk3YjNhOTFmOWMiLCJpc3MiOiJodHRwczovL2dsb2JlcHJvbW90ZXJzLmIyY2xvZ2luLmNvbS9jZGJlYTE1Mi1hNzU2LTRmZGUtOTZiMS00MzkxNDc5MDM0NWUvdjIuMC8iLCJleHAiOjE3Nzg0OTE1OTMsIm5iZiI6MTc3ODQ4Nzk5Mywib2lkIjoiNTcwZWZkM2YtYzQ1Ni00MTczLWI3ZjUtZjVhYjlhMWUzNTZiIiwic3ViIjoiNTcwZWZkM2YtYzQ1Ni00MTczLWI3ZjUtZjVhYjlhMWUzNTZiIiwiZ2l2ZW5fbmFtZSI6IlNvbmlhIiwiZmFtaWx5X25hbWUiOiJLQVBDSEUgS0FNR0FhIiwibmFtZSI6IlNvbmlhIEtBUENIRSBLQU1HQWEiLCJlbWFpbHMiOlsic2thbWdhQGdsb2JlLWdyb3VwZS5jb20iXSwidGZwIjoiQjJDXzFfU1VTSSIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwiLCJhenAiOiI4MDkzMDVjNS02M2ZmLTRiNzEtYWZjMS0wMjI5MDQzYmI4NDEiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3Nzg0ODc5OTN9.QVkSlI5jJdLFbBAns7bnqgYYv9MSL6GNpKstar2vRt4P5oR_qepwDFr7Ie1DqdKwXpJVzIELIO6vtjAMFeVIY3G4N_B_Heb0SJ-kONtUMnBEF2hcN-9_mcaVzk0jZ6SvreLkRq9yJejONkU0CvObYE-5Pz0K8ITLwVEJe7qXeEn03lw1P9r9c3IVsh_KepCAFMxTP77xpKYTNdSsP3q0rEECi26hx15aINd3I6eUlWeM3o5hfpGqRizkltTb1LQZI06UQMBYOISa5-KrII5R6ZCi_frGrqzgGwmQa10_b4-ltmVPWZ2m7eoSaGI8aoq4BC1BIaF5yXZAi2Tw4pCqPA',
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

container.register<ISearchRepository>(
  'SearchRepository',
  new SearchRepository(container.resolve('HttpService')),
);

container.register<GetCurrentMissionUseCase>(
  'GetCurrentMissionUseCase',
  new GetCurrentMissionUseCase(container.resolve('HomeRepository')),
);

container.register<GetUpComingMissionUseCase>(
  'GetUpComingMissionUseCase',
  new GetUpComingMissionUseCase(container.resolve('HomeRepository')),
);

container.register<GetAllMissionsUseCase>(
  'GetAllMissionsUseCase',
  new GetAllMissionsUseCase(container.resolve('SearchRepository')),
);
