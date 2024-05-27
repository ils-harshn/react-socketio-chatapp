import api from "..";
import API_ENDPOINTS from "../endpoints";

export const register = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.REGISTER,
    data: data,
  };

  const response = await api.request(config);
  return response.data;
};
