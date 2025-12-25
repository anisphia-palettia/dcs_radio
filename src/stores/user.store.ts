import { create } from "zustand";
import { User } from "@/modules/user/user.types";
import { apiFetch } from "@/lib/api/api_fetch";
import { API_ROUTES } from "@/constants/routes";
import { SuccessResponse } from "@/lib/api/api.types";

interface UserState {
  users: User[];
  isLoading: boolean;
  deletingId: string | null;
  error: string | null;

  fetchUsers: () => Promise<void>;
  deleteUser: (id: string) => Promise<boolean>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  isLoading: false,
  deletingId: null,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await apiFetch<SuccessResponse<User[]>>(
        API_ROUTES.users.findAll
      );
      set({ users: res.data, isLoading: false });
    } catch (error) {
      console.error("Fetch users failed", error);
      set({
        error: (error as Error).message || "Failed to fetch users",
        isLoading: false,
      });
    }
  },

  deleteUser: async (id: string) => {
    set({ deletingId: id, error: null });
    try {
      await apiFetch(API_ROUTES.users.deleteById(id), "DELETE");
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
        deletingId: null,
      }));
      return true;
    } catch (error) {
      console.error("Delete user failed", error);
      set({
        error: (error as Error).message || "Failed to delete user",
        deletingId: null,
      });
      return false;
    }
  },
}));
