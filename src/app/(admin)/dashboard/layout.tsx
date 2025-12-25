import DashboardSidebar from "@/components/Sidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Dashboard",
  description: "DCS Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reqHeaders = await headers();

  const session = await auth.api.getSession({ headers: reqHeaders });

  return <DashboardSidebar session={session}>{children}</DashboardSidebar>;
}
