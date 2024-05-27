import { useMutation } from "react-query";
import { register, verifyEmail } from "./queryFunctions";
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
