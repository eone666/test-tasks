import { MainLayout } from "@/layouts/MainLayout";
import { CurrencyChart } from "@/components/charts/CurrencyChart.tsx";
import { SellsChart } from "@/components/charts/SellsChart.tsx";
import { RequestsStatisticsChart } from "@/components/charts/RequestsStatisticsChart.tsx";
import { KPIChart } from "@/components/charts/KPIChart.tsx";
import { batch } from "react-redux";
import { useEffect } from "react";
import {
  getCurrency,
  getKPI,
  getSells,
  getStatistics,
} from "@/redux/store/dashboardSlice.ts";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    batch(() => {
      dispatch(getCurrency());
      dispatch(getSells());
      dispatch(getStatistics());
      dispatch(getKPI());
    });
  }, [dispatch]);

  const { currency, sells, statistics, kpi } = useAppSelector(
    (state) => state.dashboard,
  );

  return (
    <MainLayout heading="Дашборд: Анализ заявок компании">
      <div className="mb-[40px] 2xl:mb-[60px]">
        <CurrencyChart data={currency} />
      </div>
      <div className="flex flex-col justify-between gap-[40px] xl:flex-row">
        <SellsChart data={sells} className="w-full xl:w-[300px]" />
        <RequestsStatisticsChart
          data={statistics}
          className="w-full xl:w-[300px]"
        />
        <KPIChart data={kpi} className="w-full xl:w-[150px]" />
      </div>
    </MainLayout>
  );
}
