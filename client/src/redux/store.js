import { configureStore } from "@reduxjs/toolkit";
import weightsReducer from "./weightsSlice";

export const store = configureStore({
  reducer: {
    weights: weightsReducer,
  },
});
