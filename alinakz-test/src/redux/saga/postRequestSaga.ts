import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { FormType } from "@/types/newRequest.ts";
import {
  postNewRequest,
  postNewRequestSuccess,
  postNewRequestError,
} from "@/redux/store/requestsSlice";
import { UseFormReturn } from "react-hook-form";
import { api } from "@/api";

function* postRequestSaga({
  payload: form,
}: PayloadAction<UseFormReturn<FormType>>) {
  try {
    yield call(api.newRequest, form.getValues());
    yield put(postNewRequestSuccess());
    form.reset();
  } catch (error) {
    yield put(postNewRequestError(error as AxiosError));
  }
}

export function* watchPostRequest() {
  yield takeLatest(postNewRequest.type, postRequestSaga);
}
