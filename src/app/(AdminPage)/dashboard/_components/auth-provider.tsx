"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/hooks/use-auth.store";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const initSession = useAuthStore((s) => s.initSession);

  useEffect(() => {
    void initSession();
  }, [initSession]);

  return <>{children}</>;
}
