"use client";

import Link from "next/link";

export default function UsersPage() {
  // dummy data (nanti ganti dari DB)
  const users = [
    { id: "1", name: "Adasdsadsadmin", email: "adminasdasdasd@mail.com" },
    { id: "2", name: "User", email: "user@mail.com" },
  ];

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
            {users.map((user) => (
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
                    onClick={() => console.log("Delete user", user.id)}
                  >
                    Delete
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
