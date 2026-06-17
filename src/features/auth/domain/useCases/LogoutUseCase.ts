import { IAuthRepository } from '../repositories/IAuthRepository';

export class LogoutUseCase {
  constructor(private authRepository: IAuthRepository) {}

  execute() {
    this.authRepository.logout();
  }
}
