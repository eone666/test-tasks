import { api } from "@/api";
import { AxiosError, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCurrency,
  getCurrencySuccess,
  getCurrencyError,
} from "@/redux/store/dashboardSlice.ts";
import { CurrencyRecord } from "@/types/dashboard.ts";

function* getCurrencySaga() {
  try {
    const response: AxiosResponse<CurrencyRecord[]> = yield call(
      api.getCurrency,
    );

    yield put(getCurrencySuccess(response.data));
  } catch (error) {
    yield put(getCurrencyError(error as AxiosError));
  }
}

export function* watchGetCurrency() {
  yield takeLatest(getCurrency.type, getCurrencySaga);
}
