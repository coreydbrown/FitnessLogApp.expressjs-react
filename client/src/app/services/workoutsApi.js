import { api } from "./api";

export const workoutsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllWorkouts: build.query({
      query: () => "workouts",
      transformResponse: (resData) => resData.workouts,
      providesTags: ["workouts"],
    }),
    // addWeight: build.mutation({
    //   query: (weight) => ({
    //     url: "weight",
    //     method: "POST",
    //     body: weight,
    //   }),
    //   invalidatesTags: ["weights"],
    // }),
  }),
});

export const { useGetAllWorkoutsQuery } = workoutsApi;
