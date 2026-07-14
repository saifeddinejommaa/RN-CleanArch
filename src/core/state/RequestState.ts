import { RequestStatus } from "../../features/shared/presentation/RequestSatus";

export interface RequestState<T> {
  data: T | null;
  status: RequestStatus;
  error?: string;
}
