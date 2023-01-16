import { api } from "./api";

export const notesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllNotes: build.query({
      query: ({ category, sort, search }) =>
        `notes?category=${category}&sort=${sort}&search=${search}`,
      transformResponse: (resData) => resData.notes,
      providesTags: ["notes"],
    }),
    createNote: build.mutation({
      query: (note) => ({
        url: "notes",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["notes"],
    }),
    deleteNote: build.mutation({
      query: (id) => ({
        url: `notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notes"],
    }),
    updateNote: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `notes/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["notes"],
    }),
  }),
});

export const {
  useGetAllNotesQuery,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} = notesApi;
