import api from "..";
import API_ENDPOINTS from "../endpoints";

export const channelCreate = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.CHANNEL_CREATE,
    data: data,
  };

  const response = await api.request(config);
  return response;
};

export const listChannel = async () => {
  let config = {
    method: "get",
    url: API_ENDPOINTS.LIST_CHANNEL,
  };

  const response = await api.request(config);
  return response;
};

export const channelInvite = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.CHANNEL_INVITE(data.channelId),
    data: {
      emails: data.emails,
    },
  };
  const response = await api.request(config);
  return response;
};

export const channelAcceptInvitation = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.CHANNEL_ACCEPTINVITE,
    data,
  };
  const response = await api.request(config);
  return response;
};

export const channelMemberSearch = async (data) => {
  console.log(data);
  let config = {
    method: "get",
    url: API_ENDPOINTS.CHANNEL_MEMBER_SEARCH(data.channelId, data.name),
  };

  const response = await api.request(config);
  return response;
};
