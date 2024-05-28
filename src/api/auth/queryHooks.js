import { useMutation } from "react-query";
import { login, register, verifyEmail, verifyLogin } from "./queryFunctions";
import QUERY_KEYS from "../queryKeys";
import rqConfig from "../config";

export const useRegisterMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => register(payload),
    mutationKey: [QUERY_KEYS.REGISTER],
    ...rqConfig,
    ...config,
  });

export const useVerifyEmailMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => verifyEmail(payload),
    mutationKey: [QUERY_KEYS.VERIFYEMAIL],
    ...rqConfig,
    ...config,
  });

export const useLoginMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => login(payload),
    mutationKey: [QUERY_KEYS.LOGIN],
    ...rqConfig,
    ...config,
  });

export const useVerifyLoginMutation = (config = {}) =>
  useMutation({
    mutationFn: () => verifyLogin(),
    mutationKey: [QUERY_KEYS.VERIFYLOGIN],
    ...rqConfig,
    ...config,
  });
