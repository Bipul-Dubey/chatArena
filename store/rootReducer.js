import { combineReducers } from "@reduxjs/toolkit";

// import reducers
import appReducers from "./slices/app";

// slices
const rootReducer = combineReducers({
  app: appReducers,
});

export { rootReducer };
