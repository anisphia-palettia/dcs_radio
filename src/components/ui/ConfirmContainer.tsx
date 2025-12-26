"use client";

import { useConfirmStore } from "@/stores/confirm.store";

export default function ConfirmContainer() {
  const { isOpen, title, message, closeConfirm } = useConfirmStore();

  if (!isOpen) return null;

  return (
    <div className="modal modal-open z-50" role="dialog">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          {/* Cancel Button */}
          <button className="btn" onClick={() => closeConfirm(false)}>
            Cancel
          </button>

          {/* Confirm Button */}
          <button
            className="btn btn-primary"
            onClick={() => closeConfirm(true)}
          >
            Confirm
          </button>
        </div>
      </div>
      {/* Click outside to close (optional, treating as cancel) */}
      <div className="modal-backdrop" onClick={() => closeConfirm(false)}>
        <button className="cursor-default">close</button>
      </div>
    </div>
  );
}
