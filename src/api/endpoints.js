const API_ENDPOINTS = {
  REGISTER: "/user/register",
  VERIFY_EMAIL: "/user/verifyOTP",
  LOGIN: "/user/login",
  VERIFY_LOGIN: "/user/verifyUserToken",
  CHANNEL_CREATE: "/channel/create",
  LIST_CHANNEL: "/channel/list",
  CHANNEL_ACCEPTINVITE: "/channel/accept-invitation",
  CHANNEL_INVITE: (channelId) => `/channel/invite/${channelId}`,
};

export default API_ENDPOINTS;
