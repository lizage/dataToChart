import { combineReducers } from "@reduxjs/toolkit";
import inputReducer from "./input/inputSlice";
import titlesReducer from "./titles/titlesSlice";
import dataReducer from "./data/dataSlice";
import errorMsgReducer from "./errorMsg/errorMsgSlice";

const appReducer = combineReducers({
  input: inputReducer,
  titles: titlesReducer,
  data: dataReducer,
  errorMsg: errorMsgReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
