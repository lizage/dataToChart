import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataList: [],
    dataObj: {},
    dataTotal: 0,
  },
  reducers: {
    updateDataList: (state, action) => {
      state.dataList = action.payload;
    },
    updateDataObj: (state, action) => {
      state.dataObj = action.payload;
    },
    updateDataTotal: (state, action) => {
      state.dataTotal = action.payload;
    },
  },
});

export const { updateDataList, updateDataObj, updateDataTotal } =
  dataSlice.actions;

export default dataSlice.reducer;
