import { combineReducers } from "@reduxjs/toolkit";
import { userDataReducer } from "./AuthReducer";
import { useSocketReducer } from "./SocketReducer";
import { useChannelReducer } from "./ChannelReducer";
import { useSelectedChatReducer } from "./SelectedChatReducer";
import { useConversationReducer } from "./ConversationReducer";
import { useDmsReducer } from "./DmsReducer";

const rootReducer = combineReducers({
  userDataReducer,
  useSocketReducer,
  useChannelReducer,
  useSelectedChatReducer,
  useConversationReducer,
  useDmsReducer,
});

export default rootReducer;
