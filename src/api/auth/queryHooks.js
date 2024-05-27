import { useMutation } from "react-query";
import { login, register, verifyEmail } from "./queryFunctions";
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
