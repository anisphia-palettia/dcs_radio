import { authClient } from "@/lib/auth-client";
import { useToastStore } from "@/stores/toast.store";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  if (!name || !email || !password) {
    useToastStore.getState().showToast("error", "All fields are required");
    return null;
  }

  const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
  });

  if (error) {
    useToastStore
      .getState()
      .showToast("error", error.message || "Failed to create user");
    return null;
  }

  if (data) {
    useToastStore.getState().showToast("success", "User created successfully");
    return data;
  }

  return null;
}
