import axios from "axios";
const { QueryClientProvider, QueryClient } = require("react-query");

const API_VERSIONS = {
  v1: "api/v1",
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI + API_VERSIONS.v1,
});

api.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(function (error) {
  return Promise.reject(error);
});

const BaseQueryProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export { BaseQueryProvider };
export default api;
