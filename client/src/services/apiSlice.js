import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["weights"],
  endpoints: (builder) => ({
    getAllWeights: builder.query({
      query: () => "/weight",
      providesTags: ["weights"],
    }),
    addWeight: builder.mutation({
      query: (weight) => ({
        url: "/weight",
        method: "POST",
        body: weight,
      }),
      invalidatesTags: ["weights"],
    }),
  }),
});

export const { useGetAllWeightsQuery, useAddWeightMutation } = apiSlice;
