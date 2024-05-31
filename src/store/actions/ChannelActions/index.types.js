import { REMOVE_CHANNEL_DATA, SET_CHANNEL_DATA } from "../index.types";

export function set_channel_data(payload) {
  return {
    type: SET_CHANNEL_DATA,
    payload,
  };
}

export function remove_channel_data() {
  return {
    type: REMOVE_CHANNEL_DATA,
  };
}
