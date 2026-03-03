import { IAuthRepository } from '../repositories/IAuthRepository';

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  execute(email: string, password: string): Promise<boolean> {
    return this.authRepository.login(email, password);
  }
}
