"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import { cn } from "@/utils/cn";
import ArrowLeftIcon from "@/icons/arrow-left.svg";
import ArrowRightIcon from "@/icons/arrow-right.svg";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      locale={ru}
      showOutsideDays={true}
      className={cn("", className)}
      classNames={{
        root: "w-min",
        nav: "flex items-center justify-end gap-[40px]",
        caption: "flex items-center justify-between mb-[14px] px-[8px]",
        caption_label: "text-[15px] leading-[16px] capitalize",
        head_cell: "text-[12px] leading-[18px] font-normal uppercase ",
        day: "w-[32px] h-[32px] text-[14px] flex justify-center items-center",
        cell: "w-[32px] pr-[8px]",
        day_today: "text-accent",
        day_selected: "bg-accent text-white rounded-[8px]",
        day_disabled: "text-muted",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ArrowLeftIcon />,
        IconRight: () => <ArrowRightIcon />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
