import { useMutation, useQuery } from "react-query";
import QUERY_KEYS from "../queryKeys";
import rqConfig from "../config";
import {
  channelAcceptInvitation,
  channelCreate,
  channelInvite,
  listChannel,
} from "./queryFunctions";

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

export const useChannelAcceptInviteMutation = (config = {}) =>
  useMutation({
    mutationFn: (payload) => channelAcceptInvitation(payload),
    mutationKey: [QUERY_KEYS.CHANNELACCEPTINVITE],
    ...rqConfig,
    ...config,
  });
