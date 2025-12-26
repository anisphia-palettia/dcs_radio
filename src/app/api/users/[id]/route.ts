import { NextRequest } from "next/server";
import { deleteUserById } from "@/modules/user/user.handler";
import { requireSuperAdmin } from "@/modules/auth/auth.guard";
import { errorResponse } from "@/shared/utils/response";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireSuperAdmin(req);
  const { id } = await params;
  if (!id) {
    return errorResponse("User ID is required", {
      status: 400,
    });
  }
  const user = await deleteUserById(id);
  return user;
}
