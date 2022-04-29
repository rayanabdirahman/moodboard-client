import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import rootReducer from "./reducers";
import middlewares from "./middlewares";
import { UIState } from "./domain/types";

export type State = {
  ui: UIState;
};

// const store = configureStore(
//   rootReducer,
//   // composeWithDevTools(applyMiddleware(...middlewares))
// );

const store = configureStore({
  reducer: rootReducer,
});

export default store;
