"use client";

import { ROUTES } from "@/constants/routes";
import { authClient } from "@/lib/auth-client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
  session: { user: { role: string } } | null;
}

export default function DashboardSidebar({ children, session }: SidebarProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.replace("/login");
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content p-4">
        <label
          htmlFor="my-drawer-1"
          className="btn btn-circle drawer-button lg:hidden"
        >
          <Bars3Icon className="size-6" />
        </label>

        {children}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-2">
          <li className="lg:hidden">
            <label
              htmlFor="my-drawer-1"
              className="btn btn-circle drawer-button"
            >
              <XMarkIcon className="size-6" />
            </label>
          </li>

          <li>
            <Link href={ROUTES.DASHBOARD.path}>{ROUTES.DASHBOARD.label}</Link>
          </li>

          {session?.user?.role === "SUPER_ADMIN" && (
            <li>
              <Link href={ROUTES.USERS.path}>{ROUTES.USERS.label}</Link>
            </li>
          )}

          <li className="mt-auto">
            <button className="btn btn-error w-full" onClick={handleSignOut}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
