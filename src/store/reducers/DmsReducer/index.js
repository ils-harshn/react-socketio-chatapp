import * as types from "../../actions/index.types";

/* 
state = {
    of (peer_id): {
        messages: [{
            from (member_id): "",
            content (message): "",
            time: DATE_TIME
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
          time: action.payload.time,
        });
      } else {
        state[action.payload.of] = {
          messages: [
            {
              from: action.payload.from,
              content: action.payload.content,
              time: action.payload.time,
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
