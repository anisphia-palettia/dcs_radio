import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "@/app/(AdminPage)/dashboard/_components/app-sidebar";
import { AuthProvider } from "@/app/(AdminPage)/dashboard/_components/auth-provider";
import { Topbar } from "@/app/(AdminPage)/dashboard/_components/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <SidebarProvider>
                <div className="flex min-h-screen w-full">
                    <AppSidebar />

                    <div className="flex flex-1 flex-col">
                        <Topbar />

                        <main className="flex-1 p-6">
                            {children}
                        </main>
                    </div>
                </div>
            </SidebarProvider>
        </AuthProvider>
    );
}
