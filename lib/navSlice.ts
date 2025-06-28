import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    currentPage: "overview",
    currentSubPage: "",
    sideBar: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentSubPage: (state, action) => {
      state.currentSubPage = action.payload;
    },
    setSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
  },
});

export const { setCurrentPage, setCurrentSubPage, setSideBar } = navSlice.actions;
export default navSlice.reducer;
