import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CurrencyRecord,
  KPIRecord,
  SellsRecord,
  StatisticsRecord,
} from "@/types/dashboard.ts";
import { AxiosError } from "axios";
import { toast } from "@/components/ui/Toast";

interface DashboardState {
  currency: CurrencyRecord[];
  sells: SellsRecord[];
  statistics: StatisticsRecord[];
  kpi: KPIRecord[];
}

const initialState: DashboardState = {
  currency: [],
  sells: [],
  statistics: [],
  kpi: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getCurrency: () => {},
    getCurrencySuccess: (state, action: PayloadAction<CurrencyRecord[]>) => {
      state.currency = action.payload;
    },
    getCurrencyError: (_state, action: PayloadAction<AxiosError>) => {
      toast({
        title: "Ошибка загрузки данных",
        description: action.payload.message,
        variant: "error",
      });
    },
    getSells: () => {},
    getSellsSuccess: (state, action: PayloadAction<SellsRecord[]>) => {
      state.sells = action.payload;
    },
    getSellsError: (_state, action: PayloadAction<AxiosError>) => {
      toast({
        title: "Ошибка загрузки данных",
        description: action.payload.message,
        variant: "error",
      });
    },
    getStatistics: () => {},
    getStatisticsSuccess: (
      state,
      action: PayloadAction<StatisticsRecord[]>,
    ) => {
      state.statistics = action.payload;
    },
    getStatisticsError: (_state, action: PayloadAction<AxiosError>) => {
      toast({
        title: "Ошибка загрузки данных",
        description: action.payload.message,
        variant: "error",
      });
    },
    getKPI: () => {},
    getKPISuccess: (state, action: PayloadAction<KPIRecord[]>) => {
      state.kpi = action.payload;
    },
    getKPIError: (_state, action: PayloadAction<AxiosError>) => {
      toast({
        title: "Ошибка загрузки данных",
        description: action.payload.message,
        variant: "error",
      });
    },
  },
});

export const {
  getCurrency,
  getCurrencySuccess,
  getCurrencyError,
  getSells,
  getSellsSuccess,
  getSellsError,
  getStatistics,
  getStatisticsSuccess,
  getStatisticsError,
  getKPI,
  getKPISuccess,
  getKPIError,
} = dashboardSlice.actions;
export default dashboardSlice;
