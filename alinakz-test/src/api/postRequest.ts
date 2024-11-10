import { apiClient } from "./apiClient.ts";
import { FormType } from "@/types/newRequest.ts";

export type PostRequestParams = FormType;

export function postRequest(formData: PostRequestParams) {
  return apiClient.post("/new-requests", formData);
}
