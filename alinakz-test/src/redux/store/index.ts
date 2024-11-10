import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";

import requestsSlice from "@/redux/store/requestsSlice";
import newRequestSlice from "@/redux/store/requestsSlice";
import rootSaga from "@/redux/saga";
import dashboardSlice from "@/redux/store/dashboardSlice.ts";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    requests: requestsSlice.reducer,
    newRequest: newRequestSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
