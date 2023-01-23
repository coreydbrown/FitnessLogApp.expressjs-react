import { api } from "./api";

export const workoutsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllWorkouts: build.query({
      query: () => "workouts",
      transformResponse: (resData) => resData.workouts,
      providesTags: ["workouts"],
    }),
    addWorkout: build.mutation({
      query: (workout) => ({
        url: "workouts",
        method: "POST",
        body: workout,
      }),
      invalidatesTags: ["workouts"],
    }),
  }),
});

export const { useGetAllWorkoutsQuery, useAddWorkoutMutation } = workoutsApi;
