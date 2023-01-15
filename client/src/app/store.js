import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "./services/api";
import alertReducer from "./services/alertSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
