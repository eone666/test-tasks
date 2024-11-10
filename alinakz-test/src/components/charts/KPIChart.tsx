import { ChartWrapper } from "@/components/ChartWrapper.tsx";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import { KPIRecord } from "@/types/dashboard.ts";

const COLORS = ["#233D82", "#E9F5FF"];

export interface KPIChartProps {
  className?: string;
  data: KPIRecord[];
}

export function KPIChart({ className, data = [] }: KPIChartProps) {
  return (
    <ChartWrapper title="KPI" dropdownTitle="за день" className={className}>
      {/*тут я не очень понял из каких данных формируется график решил так оставить*/}
      <ResponsiveContainer width="100%" height={230}>
        <PieChart>
          <Pie
            startAngle={90}
            endAngle={460}
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={72}
            innerRadius={60}
          >
            {data?.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label value={`${data?.[0]?.value || 0}%`} position="center" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
