import { combineReducers } from "@reduxjs/toolkit";
import { userDataReducer } from "./AuthReducer";
import { useSocketReducer } from "./SocketReducer";
import { useChannelReducer } from "./ChannelReducer";

const rootReducer = combineReducers({
  userDataReducer,
  useSocketReducer,
  useChannelReducer,
});

export default rootReducer;
