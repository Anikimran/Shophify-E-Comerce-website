import { configureStore } from "@reduxjs/toolkit";
import shopySlice from "./shopySlice";
export const store = configureStore({
  reducer: {
    shopy: shopySlice,
  },
});
