import * as types from "../../actions/index.types";

export function useSocketReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_SOCKET:
      return action.payload;
    case types.REMOVE_SOCKET:
      return {};
    case types.CLEAR_CHANNEL_DASHBOARD_DATA:
      return {};
    default:
      return state;
  }
}
