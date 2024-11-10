import { api } from "@/api";
import { AxiosError, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSells,
  getSellsSuccess,
  getSellsError,
} from "@/redux/store/dashboardSlice.ts";
import { SellsRecord } from "@/types/dashboard.ts";

function* getSellsSaga() {
  try {
    const response: AxiosResponse<SellsRecord[]> = yield call(api.getSells);

    yield put(getSellsSuccess(response.data));
  } catch (error) {
    yield put(getSellsError(error as AxiosError));
  }
}

export function* watchGetSells() {
  yield takeLatest(getSells.type, getSellsSaga);
}
