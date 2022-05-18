import { createSlice } from "@reduxjs/toolkit";

export const titlesSlice = createSlice({
  name: "titles",
  initialState: {
    title: "",
    subTitle: "",
    chartTitle: "",
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateSubTitle: (state, action) => {
      state.subTitle = action.payload;
    },
    updateChartTitle: (state, action) => {
      state.chartTitle = action.payload;
    },
  },
});

export const { updateTitle, updateSubTitle, updateChartTitle } =
  titlesSlice.actions;

export default titlesSlice.reducer;
