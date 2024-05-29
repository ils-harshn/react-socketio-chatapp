import { combineReducers } from "@reduxjs/toolkit";
import { userDataReducer } from "./AuthReducer";

const rootReducer = combineReducers({
  userDataReducer,
});

export default rootReducer;
