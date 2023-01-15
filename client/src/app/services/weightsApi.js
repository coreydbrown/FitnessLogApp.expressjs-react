import { api } from "./api";

export const weightsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllWeights: build.query({
      query: () => "weight",
      transformResponse: (resData) => resData.weights,
      providesTags: ["weights"],
    }),
    addWeight: build.mutation({
      query: (weight) => ({
        url: "weight",
        method: "POST",
        body: weight,
      }),
      invalidatesTags: ["weights"],
    }),
  }),
});

export const { useGetAllWeightsQuery, useAddWeightMutation } = weightsApi;
