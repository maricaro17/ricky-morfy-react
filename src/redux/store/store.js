import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
  auth: loginReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: reducers,
});
export default store;