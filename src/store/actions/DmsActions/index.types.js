import { ADD_DM } from "../index.types";

export function add_dm(content, from, of, time = null) {
  return {
    type: ADD_DM,
    payload: { content, from, of, time: time ? time : new Date() },
  };
}
