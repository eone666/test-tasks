import { cn } from "@/utils/cn.ts";
import RemoveIcon from "@/icons/remove.svg";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { NavLink } from "@/components/ui/Navlink.tsx";
import DashboardIcon from "@/icons/dashboard.svg";
import RequestIcon from "@/icons/requests.svg";
import NewRequestIcon from "@/icons/new-request.svg";
import AcceptedRequestsIcon from "@/icons/accepted-requests.svg";
import RejectedRequestsIcon from "@/icons/rejected-requests.svg";

export interface SidebarProps {
  isOpen?: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed z-[10] h-screen w-[233px] max-w-[233px] shrink-0 rounded-r-[10px] bg-white lg:relative lg:rounded-r-[26px] lg:[height:auto]",
        { "hidden lg:block": !isOpen },
      )}
    >
      <button
        className="absolute right-[20px] top-[20px] lg:hidden"
        onClick={onClose}
      >
        <RemoveIcon />
      </button>

      <div className="block px-[26px] pb-[30px] pt-[32px]">
        <Link to="/">
          <img src={logo} alt="alina" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/" icon={<DashboardIcon />}>
              Дашборд
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-requests" icon={<RequestIcon />}>
              Мои заявки
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-request" icon={<NewRequestIcon />}>
              Новая заявка
            </NavLink>
          </li>
          <li>
            <NavLink to="/accepted-requests" icon={<AcceptedRequestsIcon />}>
              Согласованные заявки
            </NavLink>
          </li>
          <li>
            <NavLink to="/rejected-requests" icon={<RejectedRequestsIcon />}>
              Отклоненные заявки
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
