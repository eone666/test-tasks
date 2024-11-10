import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";
import SearchIcon from "@/icons/search.svg";

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <input
        type="text"
        className="h-[36px] w-full rounded-[8px] border-[1px] border-accent px-[8px] py-[7px] 
        pr-[30px] focus:bg-[#E9F5FF] focus:outline-none"
        {...props}
      />
      <SearchIcon className="absolute right-[8px] top-[10px]" />
    </div>
  );
}
