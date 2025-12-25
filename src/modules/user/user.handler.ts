import { successResponse } from "@/lib/response";
import { userService } from "./user.service";

export async function getUsers() {
  const users = await userService.getAll();
  return successResponse(users, {
    status: 200,
    message: "Users fetched successfully",
  });
}

export async function deleteUserById(id: string) {
  const user = await userService.deleteById(id);
  return successResponse(user, {
    status: 200,
    message: "User deleted successfully",
  });
}
