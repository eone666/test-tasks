import {
  DeleteRequestParams,
  deleteRequest,
  deleteRequestError,
  deleteRequestSuccess,
  getRequests,
} from "@/redux/store/requestsSlice";
import { api } from "@/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

function* deleteRequestSaga({
  payload: { page, query, limit, id },
}: PayloadAction<DeleteRequestParams>) {
  try {
    yield call(api.deleteRequest, { id });
    yield put(deleteRequestSuccess());
    yield put(getRequests({ page, query, limit }));
  } catch (error) {
    yield put(deleteRequestError(error as AxiosError));
  }
}

export function* watchDeleteRequest() {
  yield takeLatest(deleteRequest.type, deleteRequestSaga);
}
