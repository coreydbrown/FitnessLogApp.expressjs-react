import { api } from "./api";

export const statsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStats: build.query({
      query: () => "stats",
      //   transformResponse: (resData) => resData.records,
      providesTags: ["workouts, weights, records"],
    }),
  }),
});

export const { useGetStatsQuery } = statsApi;
