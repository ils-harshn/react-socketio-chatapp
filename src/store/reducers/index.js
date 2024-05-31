import { combineReducers } from "@reduxjs/toolkit";
import { userDataReducer } from "./AuthReducer";
import { useSocketReducer } from "./SocketReducer";

const rootReducer = combineReducers({
  userDataReducer,
  useSocketReducer,
});

export default rootReducer;
