import { LoginUseCase } from '../../features/auth/domain/useCases/LoginUseCase';
import { AuthRepositoryImp } from '../../features/auth/data/repositories/AuthRepositoryImp';
import { LogoutUseCase } from '../../features/auth/domain/useCases/LogoutUseCase';
import { CheckAuthUseCase } from '../../features/auth/domain/useCases/CheckAuthUseCase';
import { IAuthRepository } from '../../features/auth/domain/repositories/IAuthRepository';
import { HttpService } from '../services/httpServices/HttpService';
import { IHttpService } from '../services/httpServices/IHttpService';
import IHomeRepository from '../../features/home/domain/repositories/IHomeRepository';
import HomeRepository from '../../features/home/data/repositories/HomeRepository';
import GetCurrentMissionUseCase from '../../features/home/domain/useCases/GetCurrentMissionUseCase';
import GetUpComingMissionUseCase from '../../features/home/domain/useCases/GetUpComingMissionUseCase';
import GetAllMissionsUseCase from '../../features/search/domain/useCases/GetAllMissionsUseCase';
import ISearchRepository from '../../features/search/domain/repositories/searchRepository';
import SearchRepository from '../../features/search/data/repositories/SearchRepository';
import ILocalStorageService from '../services/storageServices/ILocalStorageService';
import LocalStorageService from '../services/storageServices/LocalStorageService';
import GetPromoterUseCase from '../../features/profile/domain/usecases/GetPromoterUseCase';
import PromoterRepository from '../../features/profile/data/respositories/PromoterRespository';
import IPromoterRepository from '../../features/profile/domain/repositories/IPromoterRespository';

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
    'https://7fff-2a01-e0a-a1f-9c20-ad02-d247-8590-86c4.ngrok-free.app',
    'eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIyODlkMTI2Ni02YWU0LTQ3MzMtOGMzMS00Nzk3YjNhOTFmOWMiLCJpc3MiOiJodHRwczovL2dsb2JlcHJvbW90ZXJzLmIyY2xvZ2luLmNvbS9jZGJlYTE1Mi1hNzU2LTRmZGUtOTZiMS00MzkxNDc5MDM0NWUvdjIuMC8iLCJleHAiOjE3ODQwMzI3NDQsIm5iZiI6MTc4NDAyOTE0NCwib2lkIjoiNjAxNDlkYjEtMTgxNS00MDlkLTkzM2MtZjVhY2Y1Y2JlNDljIiwic3ViIjoiNjAxNDlkYjEtMTgxNS00MDlkLTkzM2MtZjVhY2Y1Y2JlNDljIiwiZ2l2ZW5fbmFtZSI6Ik1hcmlvIiwiZmFtaWx5X25hbWUiOiJCcm9zIiwibmFtZSI6Ik1hcmlvIEJyb3MiLCJlbWFpbHMiOlsiZGV2ZWxvcGVyc0BnbG9iZS1ncm91cC5jb20iXSwidGZwIjoiQjJDXzFfU1VTSSIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwiLCJhenAiOiI4MDkzMDVjNS02M2ZmLTRiNzEtYWZjMS0wMjI5MDQzYmI4NDEiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3ODQwMjkxNDR9.ZSkEcJU9CFF4xmy2ct7MVLeMp70c0S8U2k4x3mFP6YJ0f9GfacFe6jHC2TH3YmDKw0OkjhsybNYEIpvpyEOiNBppNwuLZUScrG9QYVJqYSnf1f3eUiaNgyljkwrldIMwaBUG40o90DzeiuPjsNOhPIc4GouUyd8iLj9cLrilcQezC1WZFUCaRnDgcSouyVxnZzf5XOJTUC9sAfbkVFNKLNbD5MB0x73Ajg3C8w4IcIXUnEOTWQ15MvYtkL90EBn-rSOwLofT-q2Fru5jD6mwlzLWf9hF4wcESxPIDIyQ_XmerUdnwbMlQyeYd9_2iP-QJ2kmMfcV-IMncbgB-PU5hg',
  ),
);
container.register<ILocalStorageService>(
  'LocalStorageService',
  new LocalStorageService(),
);
container.register<IAuthRepository>(
  'AuthRepository',
  new AuthRepositoryImp(container.resolve('LocalStorageService')),
);

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

container.register<IPromoterRepository>(
  'PromoterRespository',
  new PromoterRepository(container.resolve('HttpService')),
);

container.register<IHomeRepository>(
  'HomeRepository',
  new HomeRepository(container.resolve('HttpService')),
);

container.register<ISearchRepository>(
  'SearchRepository',
  new SearchRepository(container.resolve('HttpService')),
);

container.register<GetPromoterUseCase>(
  'GetPromoterUseCase',
  new GetPromoterUseCase(container.resolve('PromoterRespository')),
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
