const ROUTES = {
  LOGIN: "/account/login",
  REGISTER: "/account/register",
  FORGET_PASSWORD: "/account/forget-password",
  VERIFY_EMAIL: "/account/verify-email",
  DASHBOARD: "/user/dashboard",
  SETTINGS: "/user/settings",
};

export const ROUTES_TITLE = {
  [ROUTES.LOGIN]: "Login",
  [ROUTES.REGISTER]: "Register",
  [ROUTES.FORGET_PASSWORD]: "Forgot Password",
  [ROUTES.VERIFY_EMAIL]: "Verify Email",
  [ROUTES.DASHBOARD]: "Dashboard",
  [ROUTES.SETTINGS]: "Account Settings",
};

export default ROUTES;
