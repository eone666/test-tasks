import { apiClient } from "./apiClient.ts";
import { KPIRecord } from "@/types/dashboard.ts";

export function getKPI() {
  return apiClient.get<KPIRecord[]>("/kpi");
}
