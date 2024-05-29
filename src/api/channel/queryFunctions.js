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
