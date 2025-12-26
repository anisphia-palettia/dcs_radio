import { create } from "zustand";

interface ConfirmState {
  isOpen: boolean;
  title: string;
  message: string;
  resolve: ((value: boolean) => void) | null;

  showConfirm: (title: string, message: string) => Promise<boolean>;
  closeConfirm: (value: boolean) => void;
}

export const useConfirmStore = create<ConfirmState>((set, get) => ({
  isOpen: false,
  title: "",
  message: "",
  resolve: null,

  showConfirm: async (title: string, message: string) => {
    return new Promise<boolean>((resolve) => {
      set({
        isOpen: true,
        title,
        message,
        resolve, // Store the resolve function
      });
    });
  },

  closeConfirm: (value: boolean) => {
    const { resolve } = get();
    if (resolve) {
      resolve(value);
    }
    set({
      isOpen: false,
      title: "",
      message: "",
      resolve: null,
    });
  },
}));
