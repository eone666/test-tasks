import * as React from "react";
import ArrowUpIcon from "@/icons/arrow-up.svg";
import ArrowDownIcon from "@/icons/arrow-down.svg";
import { Input } from "@/components/ui/Input.tsx";

import { cn } from "@/utils/cn";
import { useState } from "react";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "type"
  > {
  value?: string;
  onChange?: (value: string) => void;
}

const NumberInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, value: controlled, onChange: setControlled, ...props },
    ref,
  ) => {
    const [uncontrolled, setUncontrolled] = useState<string>("");
    const [value, setValue] = [
      controlled || uncontrolled,
      setControlled || setUncontrolled,
    ];
    return (
      <div className={cn("flex w-full items-center gap-[4px]", className)}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
          type="number"
          ref={ref}
        />
        <div className="flex flex-col gap-[10px]">
          <button onClick={() => setValue(String(+value + 1))}>
            <ArrowUpIcon />
          </button>
          <button onClick={() => setValue(String(+value - 1))}>
            <ArrowDownIcon />
          </button>
        </div>
      </div>
    );
  },
);
NumberInput.displayName = "Input";

export { NumberInput };
