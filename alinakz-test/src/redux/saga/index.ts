import { all } from "redux-saga/effects";
import { watchGetRequest } from "@/redux/saga/getRequestsSaga";
import { watchPostRequest } from "@/redux/saga/postRequestSaga.ts";
import { watchDeleteRequest } from "./deleteRequestSaga.ts";
import { watchGetCurrency } from "@/redux/saga/getCurrencySaga.ts";
import { watchGetSells } from "@/redux/saga/getSellsSaga.ts";
import { watchGetStatistics } from "@/redux/saga/getStatisticsSaga.ts";
import { watchGetKPI } from "@/redux/saga/getKPISaga.ts";

export default function* rootSaga() {
  yield all([
    watchGetRequest(),
    watchPostRequest(),
    watchDeleteRequest(),
    watchGetCurrency(),
    watchGetSells(),
    watchGetStatistics(),
    watchGetKPI(),
  ]);
}
