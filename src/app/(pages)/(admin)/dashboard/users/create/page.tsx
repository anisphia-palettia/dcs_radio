"use client";

import { createUser } from "@/helpers/user.helper";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUser() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled =
    !formData.name || !formData.email || !formData.password || isLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await createUser(
      formData.name,
      formData.email,
      formData.password
    );
    setIsLoading(false);

    if (result) {
      router.push("/dashboard/users");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl rounded-2xl">
        <form onSubmit={handleSubmit} className="card-body px-8 py-10 gap-5">
          {/* Header */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Create User</h1>
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
            {isLoading ? (
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
