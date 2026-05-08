import ApiResponse from "./ApiResponse";

export interface IHttpService {
    get<T>(url: string, config?: any): Promise<ApiResponse<T>>;
    post<T>(url: string, data?: any, config?: any): Promise<ApiResponse<T>>;
    put<T>(url: string, data?: any, config?: any): Promise<ApiResponse<T>>;
  }