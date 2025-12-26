import { NextRequest } from "next/server";
import { requireSuperAdmin } from "@/modules/auth/auth.guard";
import { getUsers } from "@/modules/user/user.handler";

export async function GET(req: NextRequest) {
  await requireSuperAdmin(req);

  return getUsers();
}
