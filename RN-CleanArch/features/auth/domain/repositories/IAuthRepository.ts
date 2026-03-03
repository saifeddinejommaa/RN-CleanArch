export interface IAuthRepository {
  login(login: string, password: string): Promise<boolean>;

  logout(): Promise<void>;

  checkAuth(): Promise<boolean>;
}
