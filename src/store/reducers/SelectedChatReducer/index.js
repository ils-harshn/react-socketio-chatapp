import * as types from "../../actions/index.types";

export function useSelectedChatReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_SELECTED_CHAT:
      return action.payload;
    case types.CLEAR_CHANNEL_DASHBOARD_DATA:
      return {};
    default:
      return state;
  }
}
