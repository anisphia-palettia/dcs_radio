"use client";

import { useState } from "react";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useConfirmStore } from "@/stores/confirm.store";

export default function ChangePassword() {
  const router = useRouter();

  const { updateUserPassword, isUpdatingPassword } = useUserStore();
  const { showConfirm } = useConfirmStore();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const isDisabled =
    !formData.currentPassword || !formData.newPassword || isUpdatingPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const confirmed = await showConfirm(
      "Change Password",
      "Are you sure you want to change your password?"
    );
    if (!confirmed) return;

    const result = await updateUserPassword(
      formData.currentPassword,
      formData.newPassword
    );
    if (result) {
      router.push(ROUTES.DASHBOARD.path);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="card w-full max-w-sm bg-base-200 shadow-2xl rounded-2xl">
        <form onSubmit={handleSubmit} className="card-body px-8 py-10 gap-5">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Change Password
            </h1>
            <p className="text-sm opacity-70">Ubah password</p>
          </div>

          <div className="divider my-1" />

          {/* Current Password */}
          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium">Current Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
              disabled={isUpdatingPassword}
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData({ ...formData, currentPassword: e.target.value })
              }
            />
          </div>

          {/* New Password */}
          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium">New Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
              disabled={isUpdatingPassword}
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
            />
          </div>

          {/* Action */}
          <button
            type="submit"
            className="btn btn-primary w-full h-11 mt-2"
            disabled={isDisabled}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
