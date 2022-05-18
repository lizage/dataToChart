import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { dataMiddleware } from "./middleware/data";

export default configureStore({
  reducer: rootReducer,
  middleware: [logger, dataMiddleware],
});
