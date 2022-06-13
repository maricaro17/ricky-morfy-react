import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { characterReducer } from "../reducers/characterReducer";

const reducers = combineReducers({
  auth: loginReducer,
  ui: uiReducer,
  characters: characterReducer
});

const store = configureStore({
  reducer: reducers,
});
export default store;