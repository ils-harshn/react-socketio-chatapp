import CHAT_TYPES from "../../../pages/channel/dashboard/Chat/chat.types";
import { SET_SELECTED_CHAT } from "../index.types";

export function set_selected_member_chat(member) {
  return {
    type: SET_SELECTED_CHAT,
    payload: {
      type: CHAT_TYPES.PEER,
      member: member,
    },
  };
}

export function set_selected_space_chat(space) {
  return {
    type: SET_SELECTED_CHAT,
    payload: {
      type: CHAT_TYPES.MULTIPEER,
      space: space,
    },
  };
}
