import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const authServiceServer = {
  async getSession() {
    return await auth.api.getSession({
      headers: await headers(),
    });
  },
};
