import { cn } from "@/utils/cn.ts";

export interface BackdropProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Backdrop({ isOpen, onClick }: BackdropProps) {
  return (
    <div
      className={cn(
        "fixed z-[9] block h-screen w-screen bg-black/50 lg:hidden",
        {
          hidden: !isOpen,
        },
      )}
      onClick={onClick}
    />
  );
}
