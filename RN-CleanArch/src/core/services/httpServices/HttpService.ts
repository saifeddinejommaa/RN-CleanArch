import axios, { AxiosInstance } from 'axios';
import { HttpConfig, IHttpService } from './IHttpService';

export class HttpService implements IHttpService {
  private client: AxiosInstance;
  private token: string;

  constructor(baseUrl: string, token: string) {
    this.token = token;
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${this.token}`;
      return config;
    });
  }

  async get<T>(url: string, config?: HttpConfig): Promise<T> {
    return this.client
      .get<T>(url, {
        params: config?.params,
        headers: {
          ...config?.headers,
        },
      })
      .then((res) => res.data);
  }

  async post<T>(url: string, data?: any, config?: HttpConfig): Promise<T> {
    return this.client
      .post<T>(url, data, {
        params: config?.params,
        headers: config?.headers,
      })
      .then((res) => res.data);
  }

  async put<T>(url: string, data?: any, config?: HttpConfig): Promise<T> {
    return this.client
      .put<T>(url, data, {
        params: config?.params,
        headers: config?.headers,
      })
      .then((res) => res.data);
  }
}
