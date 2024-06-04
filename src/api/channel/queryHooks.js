import { useMutation, useQuery } from "react-query";
import QUERY_KEYS from "../queryKeys";
import rqConfig from "../config";
import { channelCreate, channelInvite, listChannel } from "./queryFunctions";

export const useChannelCreateMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => channelCreate(payload),
    mutationKey: [QUERY_KEYS.CHANNELCREATE],
    ...rqConfig,
    ...config,
  });

export const useChannelList = (config = {}) =>
  useQuery({
    queryFn: () => listChannel(),
    queryKey: [QUERY_KEYS.LISTCHANNEL],
    ...rqConfig,
    ...config,
  });

export const useChannelInviteMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => channelInvite(payload),
    mutationKey: [QUERY_KEYS.CHANNELINVITE],
    ...rqConfig,
    ...config,
  });
