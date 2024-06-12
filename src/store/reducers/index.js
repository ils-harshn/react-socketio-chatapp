import { combineReducers } from "@reduxjs/toolkit";
import { userDataReducer } from "./AuthReducer";
import { useSocketReducer } from "./SocketReducer";
import { useChannelReducer } from "./ChannelReducer";
import { useSelectedChatReducer } from "./SelectedChatReducer";

const rootReducer = combineReducers({
  userDataReducer,
  useSocketReducer,
  useChannelReducer,
  useSelectedChatReducer,
});

export default rootReducer;
