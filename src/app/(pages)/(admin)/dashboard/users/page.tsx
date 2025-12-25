"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useUserStore } from "@/stores/user.store";
import { useToastStore } from "@/stores/toast.store";

export default function UsersPage() {
  const { users, fetchUsers, deleteUser, deletingId } = useUserStore();
  const { showToast } = useToastStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    const success = await deleteUser(id);
    if (success) {
      showToast("success", "Berhasil hapus user");
    } else {
      showToast("error", "Gagal hapus user");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>

        <Link href="/dashboard/users/create" className="btn btn-primary">
          + Create User
        </Link>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-box">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="hidden md:table-cell">Email</th>
              <th className="w-32">Action</th>
            </tr>
          </thead>

          <tbody>
            {users
              .filter((user) => user.role === "ADMIN")
              .map((user) => (
                <tr key={user.id}>
                  <td className="max-w-[220px]">
                    <div className="truncate" title={user.name}>
                      {user.name}
                    </div>
                  </td>
                  <td className="hidden md:table-cell max-w-[240px]">
                    <span className="truncate block" title={user.email}>
                      {user.email}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <Link
                      href={`/dashboard/users/${user.id}/edit`}
                      className="btn btn-sm btn-outline"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleDelete(user.id)}
                      disabled={deletingId === user.id}
                    >
                      {deletingId === user.id ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
