"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/use-auth.store";
import { toast } from "sonner";
import { DASHBOARD_ROUTES } from "@/constants/dashboard-routes";
import Link from "next/link";
import Image from "next/image";

export function AppSidebar() {
  const router = useRouter();
  const { user, logout, loading } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    toast.success("Berhasil logout");
    router.push("/login");
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center border border-b">
        <Image
          src={"/logo.jpg"}
          alt={"logo"}
          width={200}
          height={200}
          className="size-8 rounded-sm"
        />
        <span className="ml-2 text-xl font-bold">DCS Radio</span>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {DASHBOARD_ROUTES.SIDEBAR_ITEMS.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton asChild>
                  <Link href={item.path}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  <span className="truncate">
                    {loading ? "Loading..." : user?.user.email ?? "User"}
                  </span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="start"
                className="min-w-(--radix-dropdown-menu-trigger-width)"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href={
                      DASHBOARD_ROUTES.SIDEBAR_FOOTER_ITEMS.find(
                        (item) => item.key === "change-password"
                      )!.path
                    }
                  >
                    Ubah Password
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={handleLogout}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
