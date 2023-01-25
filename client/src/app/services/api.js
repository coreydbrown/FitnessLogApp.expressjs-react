import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      const token = store.getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["weights", "notes", "workouts"],
  endpoints: () => ({}),
});
