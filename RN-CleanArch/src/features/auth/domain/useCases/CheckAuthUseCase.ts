import { IAuthRepository } from '../repositories/IAuthRepository';

export class CheckAuthUseCase {
  constructor(private authRepository: IAuthRepository) {}

  execute(): Promise<boolean> {
    return this.authRepository.checkAuth();
  }
}
