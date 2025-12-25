import { NextRequest } from "next/server";
import { requireSuperAdmin } from "@/lib/api/require_super_admin";
import { getUsers } from "@/modules/user/user.handler";

export async function GET(req: NextRequest) {
  await requireSuperAdmin(req);

  return getUsers();
}
