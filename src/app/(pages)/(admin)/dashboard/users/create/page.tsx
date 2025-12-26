"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "@/constants/routes";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUser() {
  const router = useRouter();
  const { createUser, isCreating } = useUserStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isDisabled =
    !formData.name || !formData.email || !formData.password || isCreating;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(formData.name, formData.email, formData.password);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl rounded-2xl">
        <form onSubmit={handleSubmit} className="card-body px-8 py-10 gap-5">
          {/* Header */}
          <div className="text-center space-y-1">
            <div className="flex items-center gap-2 mb-4 justify-center relative">
              <button
                type="button"
                onClick={() => router.push(ROUTES.USERS.path)}
                className="btn btn-circle absolute left-0"
              >
                <ArrowLeftIcon className="size-4" />
              </button>
              <h1 className="text-2xl font-bold tracking-tight">Create User</h1>
            </div>
            <p className="text-sm opacity-70">Tambah pengguna baru</p>
          </div>

          <div className="divider my-1" />

          {/* Name */}
          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="John Doe"
              value={formData.name}
              disabled={isCreating}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="email@example.com"
              value={formData.email}
              disabled={isCreating}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
              value={formData.password}
              disabled={isCreating}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {/* Action */}
          <button
            type="submit"
            className="btn btn-primary w-full h-11 mt-2"
            disabled={isDisabled}
          >
            {isCreating ? (
              <span className="flex items-center gap-2">
                <span className="loading loading-spinner loading-sm" />
                Creating...
              </span>
            ) : (
              "Create User"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
