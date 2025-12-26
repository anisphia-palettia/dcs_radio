import { NextRequest } from "next/server";
import { auth } from "@/shared/lib/auth";

export async function requireSuperAdmin(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  if (session?.user?.role !== "SUPER_ADMIN") {
    throw new Error("FORBIDDEN");
  }

  return session;
}
