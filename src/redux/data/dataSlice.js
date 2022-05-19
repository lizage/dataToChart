import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
    dataTotal: 0,
  },
  reducers: {
    updateDataList: (state, action) => {
      state.dataList = action.payload;
    },
    updateDataTotal: (state, action) => {
      state.dataTotal = action.payload;
    },
  },
});

export const { updateDataList, updateDataTotal } = dataSlice.actions;

export default dataSlice.reducer;
