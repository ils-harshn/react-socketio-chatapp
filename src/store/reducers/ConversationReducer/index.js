import * as types from "../../actions/index.types";

/* 
state = {
    member_id: {
        ...info
    }
} 
*/

export function useConversationReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_CONVERSATIONS:
      return {
        ...action.payload,
        ...state,
      };
    case types.CLEAR_CHANNEL_DASHBOARD_DATA:
      return {};
    default:
      return state;
  }
}
