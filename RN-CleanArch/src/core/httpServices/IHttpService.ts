import ApiResponse from './ApiResponse';

export type HttpConfig = {
  params?: Record<string, any>;
  headers?: Record<string, string>;
};

export interface IHttpService {
  get<T>(
    url: string,
    config?: HttpConfig,
  ): Promise<ApiResponse<T>>;
  post<T>(
    url: string,
    data?: any,
    config?: HttpConfig,
  ): Promise<ApiResponse<T>>;
  put<T>(
    url: string,
    data?: any,
    config?: HttpConfig,
  ): Promise<ApiResponse<T>>;
}
