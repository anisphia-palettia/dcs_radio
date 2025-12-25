import { create } from "zustand";

export type ToastType = "success" | "error" | "info";

interface ToastState {
  show: boolean;
  type: ToastType;
  message: string;
  showToast: (type: ToastType, message: string) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  show: false,
  type: "info",
  message: "",

  showToast: (type, message) => {
    set({ show: true, type, message });
    setTimeout(() => set({ show: false }), 3000);
  },

  hideToast: () => set({ show: false }),
}));
