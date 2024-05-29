import * as types from "../../actions/index.types";

export function userDataReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_USER_LOGIN_DATA:
      return action.payload;
    case types.REMOVE_USER_LOGIN_DATA:
      return {};
    default:
      return state;
  }
}
