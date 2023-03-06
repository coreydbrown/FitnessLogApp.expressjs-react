import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation({
      query: (user) => ({
        url: "auth/register",
        method: "POST",
        body: user,
      }),
    }),
    loginDemo: build.mutation({
      query: () => ({
        url: "auth/login",
        method: "POST",
        body: { email: "demo@gmail.com", password: "password" },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLoginDemoMutation } =
  authApi;
