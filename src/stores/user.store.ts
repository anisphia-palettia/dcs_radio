import { create } from "zustand";
import { User } from "@/modules/user/user.types";
import { apiFetch } from "@/shared/lib/api/api_fetch";
import { API_ROUTES } from "@/constants/routes";
import { SuccessResponse } from "@/shared/lib/api/api.types";
import { authClient } from "@/shared/lib/auth-client";
import { useToastStore } from "@/stores/toast.store";

interface UserState {
  users: User[];
  isLoading: boolean;
  isCreating: boolean;
  deletingId: string | null;
  isUpdatingPassword: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  deleteUser: (id: string) => Promise<boolean>;
  createUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<unknown | null>;
  updateUserPassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<unknown | null>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  isLoading: false,
  isCreating: false,
  deletingId: null,
  isUpdatingPassword: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await apiFetch<SuccessResponse<User[]>>(
        API_ROUTES.USERS.FIND_ALL
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
      await apiFetch(API_ROUTES.USERS.DELETE_BY_ID(id), "DELETE");
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

  createUser: async (name, email, password) => {
    set({ isCreating: true, error: null });

    if (!name || !email || !password) {
      useToastStore.getState().showToast("error", "All fields are required");
      set({ isCreating: false, error: "All fields are required" });
      return null;
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      const errorMessage = error.message || "Failed to create user";
      useToastStore.getState().showToast("error", errorMessage);
      set({ isCreating: false, error: errorMessage });
      return null;
    }

    if (data) {
      useToastStore
        .getState()
        .showToast("success", "User created successfully");
      set({ isCreating: false });
      return data;
    }

    set({ isCreating: false });
    return null;
  },

  updateUserPassword: async (currentPassword: string, newPassword: string) => {
    set({ isUpdatingPassword: true, error: null });
    const { data, error } = await authClient.changePassword({
      currentPassword,
      newPassword,
      revokeOtherSessions: true,
    });

    if (data) {
      useToastStore
        .getState()
        .showToast("success", "User password updated successfully");
      set({ isUpdatingPassword: false });
      return data;
    }

    if (error) {
      const errorMessage = error.message || "Failed to update user password";
      useToastStore.getState().showToast("error", errorMessage);
      set({ isUpdatingPassword: false, error: errorMessage });
      return null;
    }

    set({ isUpdatingPassword: false });
    return null;
  },
}));
