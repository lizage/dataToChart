import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    isInput: false,
  },
  reducers: {
    updateInput: (state, action) => {
      state.isInput = action.payload.values?.length > 0;
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;
