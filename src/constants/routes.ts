export const ROUTES = {
  DASHBOARD: {
    path: "/dashboard",
    label: "Dashboard",
  },
  USERS: {
    path: "/dashboard/users",
    label: "Admin Management",
  },
} as const;

export const API_ROUTES = {
  users: {
    findAll: "/users",
    deleteById: (id: string) => `/users/${id}`,
  },
} as const;
