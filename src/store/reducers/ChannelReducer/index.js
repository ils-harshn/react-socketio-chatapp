import * as types from "../../actions/index.types";

export function useChannelReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_CHANNEL_DATA:
      return action.payload;
    case types.REMOVE_CHANNEL_DATA:
      return {};
    case types.CLEAR_CHANNEL_DASHBOARD_DATA:
      console.log("channel reducer cleared");
      return {};
    default:
      return state;
  }
}
