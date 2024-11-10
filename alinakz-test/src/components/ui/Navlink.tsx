import { ReactElement } from "react";
import { cn } from "@/utils/cn";
import {
  NavLinkProps as RouterNavLinkProps,
  NavLink as RouterNavLink,
} from "react-router-dom";

export interface NavLinkProps extends RouterNavLinkProps {
  icon?: ReactElement;
}

export function NavLink({ children, className, icon, ...props }: NavLinkProps) {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        cn(
          "flex h-[48px] items-center gap-[15px] rounded-r-[12px] px-[20px] text-[14px]",
          { "bg-accent text-white": isActive },
          className,
        )
      }
      {...props}
    >
      <>
        {icon ? icon : null}
        {children}
      </>
    </RouterNavLink>
  );
}
