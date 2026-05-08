type ApiResponse<T> = {
  data: T | null;
  messages: string;
  status: number;
};

export default ApiResponse;
