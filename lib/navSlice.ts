import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    currentPage: "overview",
    currentSubPage: "",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentSubPage: (state, action) => {
      state.currentSubPage = action.payload;
    },
  },
});

export const { setCurrentPage, setCurrentSubPage } = navSlice.actions;
export default navSlice.reducer;
