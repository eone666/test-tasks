import { cva } from "class-variance-authority";

export const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      primary: "bg-accent text-white disabled:bg-muted",
      secondary:
        "border border-accent bg-[#E9F5FF] text-foreground disabled:border-muted disabled:bg-white disabled:text-muted",
      warning: "bg-error text-white disabled:bg-muted",
      outline: "border border-accent bg-white hover:bg-accent hover:text-white",
      ghost: "hover:bg-accent hover:text-white",
      link: "underline-offset-4 hover:underline",
    },
    size: {
      default: "h-[47px] rounded-[8px] px-[14px]",
      small: "h-[33px] rounded-[6px] px-[12px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});
