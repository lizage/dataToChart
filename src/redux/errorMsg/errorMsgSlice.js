import { createSlice } from "@reduxjs/toolkit";

export const errorMsgSlice = createSlice({
  name: "errorMsg",
  initialState: {
    errorMsg: "",
  },
  reducers: {
    updateErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export const { updateErrorMsg } = errorMsgSlice.actions;

export default errorMsgSlice.reducer;
