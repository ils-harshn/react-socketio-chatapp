import api from "..";
import API_ENDPOINTS from "../endpoints";

export const register = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.REGISTER,
    data: data,
  };

  const response = await api.request(config);
  return response;
};

export const verifyEmail = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.VERIFY_EMAIL,
    headers: {
      "user-id": data._id,
    },
    data: {
      otp: data.otp,
    },
  };

  const response = await api.request(config);
  return response;
};

export const login = async (data) => {
  let config = {
    method: "post",
    url: API_ENDPOINTS.LOGIN,
    data: data,
  };

  const response = await api.request(config);
  return response;
};
