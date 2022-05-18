import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: ["111", "222", "333"],
  },
  reducers: {
    updateDataList: (state, action) => {
      state.dataList = action.payload;
    },
  },
});

export const { updateDataList } = dataSlice.actions;

export default dataSlice.reducer;
