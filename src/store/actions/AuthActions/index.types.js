import { REMOVE_USER_LOGIN_DATA, SET_USER_LOGIN_DATA } from "../index.types";

export function set_user_data(payload) {
  return {
    type: SET_USER_LOGIN_DATA,
    payload,
  };
}

export function remove_user_data() {
  return {
    type: REMOVE_USER_LOGIN_DATA,
  };
}
