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
  tagTypes: ["weights", "notes"],
  endpoints: (builder) => ({
    getAllWeights: builder.query({
      query: () => "/weight",
      transformResponse: (resData) => resData.weights,
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

    getAllNotes: builder.query({
      query: () => "/notes",
      transformResponse: (resData) => resData.notes,
      providesTags: ["notes"],
    }),
    createNote: builder.mutation({
      query: (note) => ({
        url: "/notes",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["notes"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notes"],
    }),
    updateNote: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/notes/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["notes"],
    }),
  }),
});

export const {
  useGetAllWeightsQuery,
  useAddWeightMutation,

  useGetAllNotesQuery,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} = apiSlice;
