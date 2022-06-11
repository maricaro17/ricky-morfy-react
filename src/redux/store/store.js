import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/authReducer";

const reducers = combineReducers({
  auth: loginReducer
});

const store = configureStore({
  reducer: reducers,
});
export default store;