import { apiClient } from "./apiClient.ts";
import { StatisticsRecord } from "@/types/dashboard.ts";

export function getStatistics() {
  return apiClient.get<StatisticsRecord[]>("/statistics");
}
