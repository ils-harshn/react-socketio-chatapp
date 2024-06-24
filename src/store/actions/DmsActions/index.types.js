import { ADD_DM } from "../index.types";

export function add_dm(content, from, of) {
  return {
    type: ADD_DM,
    payload: { content, from, of },
  };
}
