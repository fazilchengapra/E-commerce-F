import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";

const appStore = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export default appStore;

// ✅ Correct types
export type AppStore = typeof appStore;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
