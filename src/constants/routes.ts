const ROOT_DASHBOARD = "/dashboard";
const ROOT_DASHBOARD_USERS = `${ROOT_DASHBOARD}/users`;

const API_ROOT_USERS = "/users";

export const ROUTES = {
  LOGIN: { path: "/login", label: "Login" },
  DASHBOARD: { path: ROOT_DASHBOARD, label: "Dashboard" },
  USERS: {
    path: ROOT_DASHBOARD_USERS,
    label: "Users",
    CREATE: { path: `${ROOT_DASHBOARD_USERS}/create`, label: "Create User" },
    UPDATE: (id: string) => ({
      path: `${ROOT_DASHBOARD_USERS}/${id}/edit`,
      label: "Update User",
    }),
  },
  CHANGE_PASSWORD: {
    path: `${ROOT_DASHBOARD}/change-password`,
    label: "Change Password",
  },
} as const;

export const API_ROUTES = {
  USERS: {
    FIND_ALL: API_ROOT_USERS,
    DELETE_BY_ID: (id: string) => `${API_ROOT_USERS}/${id}`,
  },
} as const;
