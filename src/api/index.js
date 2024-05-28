import axios from "axios";
import WebTokenStorer from "../utils/webTokenStorer";
const { QueryClientProvider, QueryClient } = require("react-query");

const API_VERSIONS = {
  v1: "api/v1",
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI + API_VERSIONS.v1,
});

api.interceptors.request.use(
  function (config) {
    const data = WebTokenStorer.get();
    config.headers["Content-Type"] = "application/json";

    // authorization token setup
    if (data._id && data.email && data.token) {
      config.headers["user-id"] = data._id;
      config.headers["user-token"] = data.token;
      config.headers["user-email"] = data.email;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const BaseQueryProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export { BaseQueryProvider };
export default api;
