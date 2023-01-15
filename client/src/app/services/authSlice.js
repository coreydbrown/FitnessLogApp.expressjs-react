import { createSlice } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utilities/localStorage";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  token: token ? token : null,
  user: user ? JSON.parse(user) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token, user } = payload;
      state.token = token;
      state.user = user;
      addUserToLocalStorage(payload);
    },
    resetCredentials: (state) => {
      state.token = null;
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
});

export const { setCredentials, resetCredentials } = authSlice.actions;

export default authSlice.reducer;
