import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { ChartWrapper } from "@/components/ChartWrapper.tsx";
import { format } from "date-fns";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { CurrencyRecord } from "@/types/dashboard.ts";

const dateFormatter = (date: Date) => {
  return format(new Date(date), "dd");
};

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  const date = payload?.[0]?.payload.date;
  const sellPrice = payload?.[0]?.payload.sell.toFixed(0);
  const buyPrice = payload?.[0]?.payload.buy.toFixed(0);
  if (active) {
    return (
      <div className="rounded-[4px] bg-[#233D82E5] px-[12px] py-[8px] text-[12px] text-white">
        <div className="mb-[6px] text-[10px]">
          {format(date || new Date(), "dd.mm.yyyy")}
        </div>
        <div className="mb-[4px] flex justify-between text-[8px]">
          <div className="text-[#00C366]">покупка</div>
          <div className="text-[#EF6060]">продажа</div>
        </div>
        <div className="flex justify-between gap-[12px]">
          <div>{buyPrice}₸</div>
          <div>$</div>
          <div>{sellPrice}₸</div>
        </div>
      </div>
    );
  }

  return null;
};

export interface CurrencyChartProps {
  className?: string;
  data: CurrencyRecord[];
}

export function CurrencyChart({ className, data = [] }: CurrencyChartProps) {
  return (
    <ChartWrapper
      title="График курса валют "
      dropdownTitle="Доллар"
      className={className}
    >
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={dateFormatter} fontSize={10} />
          <YAxis domain={[440, 480]} fontSize={10} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="buy"
            stroke="#00C366"
            fill="#A5B7E9B2"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#C63131"
            fill="#D7EDFFB2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
