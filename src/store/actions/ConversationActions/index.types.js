import { ADD_CONVERSATIONS } from "../index.types";

export function add_conversations(members) {
  const payload = {};
  members.forEach((member) => {
    payload[member._id] = member;
  });
  return {
    type: ADD_CONVERSATIONS,
    payload,
  };
}
