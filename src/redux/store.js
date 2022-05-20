import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { inputMiddleware } from "./middleware/input";

export default configureStore({
  reducer: rootReducer,
  middleware: [logger, inputMiddleware],
});
