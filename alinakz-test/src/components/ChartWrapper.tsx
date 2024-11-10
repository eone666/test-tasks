import { ReactNode } from "react";
import ArrowCircleDownIcon from "@/icons/arrow-circle-down.svg";

export interface ChartWrapperProps {
  title: string;
  dropdownTitle: string;
  className?: string;
  children: ReactNode;
}

export function ChartWrapper({
  title,
  dropdownTitle,
  className,
  children,
}: ChartWrapperProps) {
  return (
    <div className={className}>
      <div className="mb-[32px] flex items-center justify-between gap-[15px]">
        <h2 className="text-[16px] font-medium">{title}</h2>
        <div className="flex items-center gap-[12px]">
          <div>{dropdownTitle}</div>
          <ArrowCircleDownIcon />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
