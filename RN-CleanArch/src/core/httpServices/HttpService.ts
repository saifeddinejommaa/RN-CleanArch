import { IHttpService } from './IHttpService';

export class HttpService implements IHttpService {
  constructor(
    private baseUrl: string,
    private token: string,
  ) {}

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  }

  get<T>(url: string, config?: any): Promise<T> {
    return this.request<T>(url, {
      method: 'GET',
      ...config,
    });
  }

  post<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.request<T>(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...config,
    });
  }

  put<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.request<T>(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...config,
    });
  }
}
