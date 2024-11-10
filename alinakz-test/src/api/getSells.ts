import { apiClient } from "./apiClient.ts";
import { SellsRecord } from "@/types/dashboard.ts";

export function getSells() {
  return apiClient.get<SellsRecord[]>("/sells");
}
