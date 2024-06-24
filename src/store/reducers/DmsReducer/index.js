import * as types from "../../actions/index.types";

/* 
state = {
    of (peer_id): {
        messages: [{
            from (member_id): "",
            content (message): "",
        }, ...],
    }...
} 
*/

export function useDmsReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_DM:
      if (state[action.payload.of]) {
        state[action.payload.of].messages.push({
          from: action.payload.from,
          content: action.payload.content,
        });
      } else {
        state[action.payload.of] = {
          messages: [
            {
              from: action.payload.from,
              content: action.payload.content,
            },
          ],
        };
      }
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
