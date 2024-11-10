import { api } from "@/api";
import { AxiosError, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getKPI,
  getKPISuccess,
  getKPIError,
} from "@/redux/store/dashboardSlice.ts";
import { KPIRecord } from "@/types/dashboard.ts";

function* getKPISaga() {
  try {
    const response: AxiosResponse<KPIRecord[]> = yield call(api.getKPI);

    yield put(getKPISuccess(response.data));
  } catch (error) {
    yield put(getKPIError(error as AxiosError));
  }
}

export function* watchGetKPI() {
  yield takeLatest(getKPI.type, getKPISaga);
}
