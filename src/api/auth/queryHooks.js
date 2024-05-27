import { useMutation } from "react-query";
import { register } from "./queryFunctions";
import QUERY_KEYS from "../queryKeys";
import rqConfig from "../config";

export const useRegisterMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => register(payload),
    mutationKey: [QUERY_KEYS.REGISTER],
    ...rqConfig,
    ...config,
  });
