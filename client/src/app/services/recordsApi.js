import { api } from "./api";

export const recordsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRecords: build.query({
      query: () => "records",
      transformResponse: (resData) => resData.records,
      providesTags: ["records"],
    }),
  }),
});

export const { useGetRecordsQuery } = recordsApi;
