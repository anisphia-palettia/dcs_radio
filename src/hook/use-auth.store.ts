import {create} from "zustand";
import {Session} from "@/lib/auth-client";
import {authService} from "@/service/auth.service";

interface AuthState {
    user: Session | null;
    loading: boolean
    error: string | null

    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    fetchSession: () => Promise<void>
    initSession: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email, password) => {
        set({loading: true, error: null});

        const {error: loginError} = await authService.login({email, password});
        if (loginError) {
            set({loading: false, error: loginError.message});
        }
        const user = await authService.session();

        set({user: user.data, loading: false});
    },

    logout: async () => {
        await authService.logout();

        set({
            user: null,
            loading: false,
            error: null,
        });
    },

    fetchSession: async () => {
        try {
            const {data: user} = await authService.session();
            set({user: user});
        } catch {
            set({user: null});
        }
    },

    initSession: async () => {
        const {data: session, error : sessionError} = await authService.session();

        set({
            user: session ?? null,
            loading: false,
            error: sessionError?.message ?? null,
        });
    }
}))