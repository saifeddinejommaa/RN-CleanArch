export type RequestResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };
