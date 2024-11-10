import { apiClient } from "./apiClient.ts";
import { Request } from "@/types/requests.ts";

export interface GetRequestsParams {
  page: number;
  limit: number;
  query?: string;
}

export function getRequests({ page, limit, query }: GetRequestsParams) {
  const searchParams = new URLSearchParams();

  searchParams.set("_page", String(page));
  searchParams.set("_limit", String(limit));
  query && searchParams.set("full_name_like", query);

  return apiClient.get<Request[]>(`/requests?${searchParams.toString()}`);
}
