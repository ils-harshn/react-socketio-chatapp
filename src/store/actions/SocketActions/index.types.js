import { SET_SOCKET, REMOVE_SOCKET } from "../index.types";

export function set_socket(payload) {
  return {
    type: SET_SOCKET,
    payload,
  };
}

export function remove_socket() {
  return {
    type: REMOVE_SOCKET,
  };
}
