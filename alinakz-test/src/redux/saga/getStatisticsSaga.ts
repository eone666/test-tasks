import { api } from "@/api";
import { AxiosError, AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getStatistics,
  getStatisticsSuccess,
  getStatisticsError,
} from "@/redux/store/dashboardSlice.ts";
import { StatisticsRecord } from "@/types/dashboard.ts";

function* getStatisticsSaga() {
  try {
    const response: AxiosResponse<StatisticsRecord[]> = yield call(
      api.getStatistics,
    );

    yield put(getStatisticsSuccess(response.data));
  } catch (error) {
    yield put(getStatisticsError(error as AxiosError));
  }
}

export function* watchGetStatistics() {
  yield takeLatest(getStatistics.type, getStatisticsSaga);
}
