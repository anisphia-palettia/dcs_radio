import { Home } from "lucide-react";

export const DASHBOARD_ROUTES = {
  SIDEBAR_ITEMS: [
    {
      key: "dashboard",
      path: "/dashboard",
      title: "Dashboard",
      label: "Home",
      icon: Home,
    },
  ],
  SIDEBAR_FOOTER_ITEMS: [
    {
      key: "change-password",
      path: "/dashboard/change-password",
      title: "Ubah Password",
      label: "Change Password",
    },
    {
      key: "logout",
      path: null,
      title: "Keluar",
      label: "Logout",
    },
  ],
} as const;

export const ALL_DASHBOARD_ROUTES = [
  ...DASHBOARD_ROUTES.SIDEBAR_ITEMS,
  ...DASHBOARD_ROUTES.SIDEBAR_FOOTER_ITEMS,
].filter((r) => r.path !== null);
