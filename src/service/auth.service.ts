import {authClient} from "@/lib/auth-client";

export const authService = {
    login(data: { email: string; password: string }) {
        return authClient.signIn.email(data)
    },

    session() {
        return authClient.getSession();
    },

    logout() {
        return authClient.signOut();
    },
};
