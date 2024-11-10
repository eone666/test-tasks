import { ChartWrapper } from "@/components/ChartWrapper.tsx";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { SellsRecord } from "@/types/dashboard.ts";

export interface SellsChartProps {
  className?: string;
  data: SellsRecord[];
}

export function SellsChart({ className, data = [] }: SellsChartProps) {
  return (
    <ChartWrapper
      title="Продажи по Казахстану"
      dropdownTitle="за год"
      className={className}
    >
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} barSize={12} layout="vertical">
          <XAxis
            axisLine
            dataKey="sells"
            tick
            tickLine
            type="number"
            fontSize={10}
            tickFormatter={(value) =>
              new Intl.NumberFormat("ru", { notation: "compact" }).format(
                value || 0,
              )
            }
          />
          <YAxis
            axisLine
            dataKey="name"
            tick
            tickLine
            type="category"
            fontSize={10}
            interval={0}
            reversed
          />
          <Bar dataKey="sells" fill="#233D82" radius={[0, 2, 2, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
