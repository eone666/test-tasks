import { ChartWrapper } from "@/components/ChartWrapper.tsx";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  DefaultLegendContentProps,
  ResponsiveContainer,
} from "recharts";
import { StatisticsRecord } from "@/types/dashboard.ts";

const renderLegend = (props: DefaultLegendContentProps) => {
  const { payload } = props;

  return (
    <div className="flex justify-between">
      {payload?.map((entry, index) => (
        <div key={index} className="flex items-center gap-[6px]">
          <div
            className="h-[8px] w-[8px] rounded-[1px]"
            style={{
              background: entry.color,
            }}
          />
          <div>{entry.value}</div>
        </div>
      ))}
    </div>
  );
};

export interface RequestsStatisticsChartProps {
  className?: string;
  data: StatisticsRecord[];
}

export function RequestsStatisticsChart({
  className,
  data = [],
}: RequestsStatisticsChartProps) {
  return (
    <ChartWrapper
      title="Статистика заявок"
      dropdownTitle="за год"
      className={className}
    >
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} barSize={12} layout="horizontal">
          <YAxis hide type="number" />
          <XAxis
            axisLine
            dataKey="name"
            tick
            tickLine
            type="category"
            fontSize={10}
            interval={0}
          />
          <Bar
            name="закрытые"
            dataKey="closed"
            fill="#D73C4A"
            radius={[2, 2, 0, 0]}
          />
          <Bar
            name="новые"
            dataKey="new"
            fill="#0016BE"
            radius={[2, 2, 0, 0]}
          />
          <Bar
            name="текущие"
            dataKey="current"
            fill="#E7BE34"
            radius={[2, 2, 0, 0]}
          />
          <Legend
            verticalAlign="bottom"
            iconType="square"
            iconSize={8}
            wrapperStyle={{
              fontSize: "10px",
            }}
            content={renderLegend}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
