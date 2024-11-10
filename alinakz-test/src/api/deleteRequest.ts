import { apiClient } from "./apiClient.ts";

export interface DeleteRequestParams {
  id: number;
}

export function deleteRequest({ id }: DeleteRequestParams) {
  return apiClient.delete<Request>(`/requests/${id}`);
}
