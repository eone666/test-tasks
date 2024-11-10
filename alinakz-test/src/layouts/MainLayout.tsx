import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { cn } from "@/utils/cn";
import NotificationsIcon from "@/icons/notifications.svg";
import photo from "@/assets/photo.png";
import { ProfileWidget } from "@/components/ProfileWidget";
import { MenuIcon } from "lucide-react";
import { Sidebar } from "@/components/Sidebar.tsx";
import { Backdrop } from "@/components/Backdrop.tsx";

export interface MainLayoutProps {
  heading: string;
  className?: string;
  children: ReactNode;
}

export function MainLayout({ heading, className, children }: MainLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen overflow-hidden bg-background-secondary">
      <Backdrop isOpen={isSidebarOpen} onClick={closeSidebar} />

      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen} />

      <div className="w-[1vmax] max-w-full flex-1 px-[10px] pb-[10px] sm:px-[20px] sm:pb-[30px] md:px-[50px] md:pb-[60px]">
        <header className="flex h-[100px] items-center justify-between">
          <div className="flex items-center gap-[20px] lg:hidden">
            <button onClick={openSidebar}>
              <MenuIcon />
            </button>
            <Link to="/">
              <img src={logo} alt="alina" />
            </Link>
          </div>
          <h1 className="hidden text-[20px] font-semibold text-accent lg:block">
            {heading}
          </h1>
          <div className="flex items-center gap-[20px] text-accent sm:gap-[40px]">
            <button>
              <NotificationsIcon />
            </button>
            <ProfileWidget src={photo} name="Иванов И.И." />
          </div>
        </header>
        <main
          className={cn(
            "rounded-[20px] bg-white px-[10px] py-[20px] md:px-[20px] md:py-[20px] lg:px-[32px] lg:py-[40px]",
            className,
          )}
        >
          <h1 className="mb-[20px] block text-[18px] font-semibold text-accent sm:text-[20px] lg:hidden">
            {heading}
          </h1>
          {children}
        </main>
      </div>
    </div>
  );
}
