import { Request } from "@/types/requests";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "@/components/ui/Toast";
import { AxiosError } from "axios";
import { FormType } from "@/types/newRequest.ts";
import { UseFormReturn } from "react-hook-form";
import { GetRequestsParams } from "@/api";

export interface GetRequestsSuccessPayload {
  rows: Request[];
  total: number;
}

export interface DeleteRequestParams {
  id: number;
  page: number;
  query?: string;
  limit: number;
}

export interface RequestsState {
  isLoading: boolean;
  data: Request[];
  total: number;
  totalPages: number;
}

const initialState: RequestsState = {
  data: [],
  isLoading: false,
  total: 0,
  totalPages: 0,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    getRequests: (state, _: PayloadAction<GetRequestsParams>) => {
      state.isLoading = true;
    },
    getRequestsSuccess: (
      state,
      { payload: { rows, total } }: PayloadAction<GetRequestsSuccessPayload>,
    ) => {
      state.isLoading = false;
      state.data = rows;
      state.total = total;
    },
    getRequestsError: (
      state,
      { payload: error }: PayloadAction<AxiosError>,
    ) => {
      state.isLoading = false;
      toast({
        title: "Возникла ошибка при загрузке данных",
        variant: "error",
        description: error.message,
      });
    },
    deleteRequest: (_state, _payload: PayloadAction<DeleteRequestParams>) => {},
    deleteRequestSuccess: () => {
      toast({
        title: "Заявка успешно удалена",
        variant: "success",
      });
    },
    deleteRequestError: (_, { payload: error }: PayloadAction<AxiosError>) => {
      toast({
        title: "Ошибка при удалении",
        description: error.message,
        variant: "error",
      });
    },
    postNewRequest: (
      state,
      _payload: PayloadAction<UseFormReturn<FormType>>,
    ) => {
      state.isLoading = true;
    },
    postNewRequestSuccess: (state) => {
      state.isLoading = false;
      toast({ title: "Заявка успешно отправлена", variant: "success" });
    },
    postNewRequestError: (
      state,
      { payload: error }: PayloadAction<AxiosError>,
    ) => {
      state.isLoading = false;
      toast({
        title: "Возникла ошибка при отправке",
        variant: "error",
        description: error.message,
      });
    },
  },
});

export const {
  getRequests,
  getRequestsError,
  getRequestsSuccess,
  deleteRequest,
  deleteRequestSuccess,
  deleteRequestError,
  postNewRequest,
  postNewRequestSuccess,
  postNewRequestError,
} = requestsSlice.actions;
export default requestsSlice;
