import {create} from "zustand";
import {authService} from "@/service/auth.service";
import {Session} from "@/lib/auth-client";

interface AuthState {
    user: Session | null;
    loading: boolean
    error: string | null

    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    fetchSession: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email, password) => {
        set({loading: true, error: null});

        try {
            await authService.login({email, password});
            const user = await authService.session();
            set({user : user.data, loading: false});
        } catch (err: unknown) {
            let message = "Login gagal";

            if (err instanceof Error) {
                message = err.message;
            }

            set({
                error: message,
                loading: false,
            });
        }
    },

    logout: async () => {
        await authService.logout();
        set({user: null});
    },

    fetchSession: async () => {
        try {
            const user = await authService.session();
            set({user : user.data});
        } catch {
            set({user: null});
        }
    },
}))