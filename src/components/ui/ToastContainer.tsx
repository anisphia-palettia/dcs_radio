"use client";

import { useToastStore } from "@/stores/toast.store";

export default function ToastContainer() {
  const { show, type, message, hideToast } = useToastStore();

  if (!show) return null;

  return (
    <div className="toast toast-top toast-end z-50">
      <div
        className={`alert ${
          type === "success"
            ? "alert-success"
            : type === "error"
            ? "alert-error"
            : "alert-info"
        }`}
      >
        <span>{message}</span>
        <button onClick={hideToast} className="btn btn-ghost btn-xs ml-2">
          ✕
        </button>
      </div>
    </div>
  );
}
