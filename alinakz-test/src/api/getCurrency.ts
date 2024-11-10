import { apiClient } from "./apiClient.ts";
import { CurrencyRecord } from "@/types/dashboard.ts";

export function getCurrency() {
  return apiClient.get<CurrencyRecord[]>("/currency");
}
