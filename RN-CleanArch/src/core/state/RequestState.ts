export type RequestStatus = 'initial' | 'loading' | 'success' | 'error';

export interface RequestState<T> {
  data: T | null;
  status: RequestStatus;
  error?: string;
}
