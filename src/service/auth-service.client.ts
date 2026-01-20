import { authClient } from "@/lib/auth-client";

export const authServiceClient = {
  login(data: { email: string; password: string }) {
    return authClient.signIn.email(data);
  },

  session() {
    return authClient.getSession();
  },

  logout() {
    return authClient.signOut();
  },

  updateUser(data: { name?: string; image?: string }) {
    return authClient.updateUser(data);
  },

  changePassword(data: Parameters<typeof authClient.changePassword>[0]) {
    return authClient.changePassword(data);
  },
};
