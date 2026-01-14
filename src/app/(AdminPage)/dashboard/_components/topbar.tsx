"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ALL_DASHBOARD_ROUTES } from "@/constants/dashboard-routes";

export function Topbar() {
  const pathname = usePathname();
  const title =
    ALL_DASHBOARD_ROUTES.find((r) => r.path === pathname)?.title ?? "Dashboard";

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-4 w-full">
      <div className="flex items-center justify-between gap-4">
        <SidebarTrigger />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{title}</h1>
          <span className="text-xs text-muted-foreground">{pathname}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </span>
      </div>
    </header>
  );
}
