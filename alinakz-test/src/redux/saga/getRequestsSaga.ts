import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosHeaders, AxiosResponse } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  getRequests,
  getRequestsSuccess,
  getRequestsError,
} from "@/redux/store/requestsSlice";
import { Request } from "@/types/requests.ts";
import { api, GetRequestsParams } from "@/api";

function* getRequestsSaga({
  payload: { page, limit, query },
}: PayloadAction<GetRequestsParams>) {
  try {
    const response: AxiosResponse<Request[]> = yield call(api.getRequests, {
      page,
      limit,
      query,
    });

    yield put(
      getRequestsSuccess({
        rows: response.data,
        total: (response.headers as AxiosHeaders).has("X-Total-Count")
          ? Number((response.headers as AxiosHeaders).get("X-Total-Count"))
          : 0,
      }),
    );
  } catch (error) {
    yield put(getRequestsError(error as AxiosError));
  }
}

export function* watchGetRequest() {
  yield takeLatest(getRequests.type, getRequestsSaga);
}
