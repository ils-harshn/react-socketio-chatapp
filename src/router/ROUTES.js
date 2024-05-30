const ROUTES = {
  LOGIN: "/account/login",
  REGISTER: "/account/register",
  FORGET_PASSWORD: "/account/forget-password",
  VERIFY_EMAIL: "/account/verify-email",
  DASHBOARD: "/user/dashboard",
  SETTINGS: "/user/settings",
  CHANNELDASHBOARD: "/channel/:channelId",
};

export const ROUTES_FUCN = {
  CHANNELDASHBOARD: (id) => `/channel/${id}`,
};

export const ROUTES_TITLE = {
  [ROUTES.LOGIN]: "Login",
  [ROUTES.REGISTER]: "Register",
  [ROUTES.FORGET_PASSWORD]: "Forgot Password",
  [ROUTES.VERIFY_EMAIL]: "Verify Email",
  [ROUTES.DASHBOARD]: "Dashboard",
  [ROUTES.SETTINGS]: "Account Settings",
  [ROUTES.CHANNELDASHBOARD]: "Loading",
};

export default ROUTES;
