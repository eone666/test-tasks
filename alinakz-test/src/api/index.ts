export * from "./apiClient.ts";
import { getRequests, type GetRequestsParams } from "./getRequests.ts";
import { postRequest, type NewRequestParams } from "./postRequest.ts";
import { deleteRequest, type DeleteRequestParams } from "./deleteRequest.ts";
import { getCurrency } from "@/api/getCurrency.ts";
import { getSells } from "@/api/getSells.ts";
import { getStatistics } from "@/api/getStatistics.ts";
import { getKPI } from "@/api/getKPI.ts";

export const api = {
  getRequests,
  newRequest: postRequest,
  deleteRequest,
  getCurrency,
  getSells,
  getStatistics,
  getKPI,
};

export type { GetRequestsParams, NewRequestParams, DeleteRequestParams };
