const ROUTES = {
  LOGIN: "/account/login",
  REGISTER: "/account/register",
  FORGET_PASSWORD: "/account/forget-password",
  VERIFY_EMAIL: "/account/verify-email",
  DASHBOARD: "/user/dashboard",
  SETTINGS: "/user/settings",
  CHANNELDASHBOARD: "/channel/:channelId",
  CHANNELACCEPTINVITATION: "/channel/accept-invitation/:invitationId",
};

export const ROUTES_FUCN = {
  CHANNELDASHBOARD: (id) => `/channel/${id}`,
  CHANNELACCEPTINVITATION: (id) => `/channel/accept-invitation/${id}`,
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
