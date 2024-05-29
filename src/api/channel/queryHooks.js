import { useMutation } from "react-query";
import QUERY_KEYS from "../queryKeys";
import rqConfig from "../config";
import { channelCreate } from "./queryFunctions";

export const useChannelCreateMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => channelCreate(payload),
    mutationKey: [QUERY_KEYS.CHANNELCREATE],
    ...rqConfig,
    ...config,
  });
