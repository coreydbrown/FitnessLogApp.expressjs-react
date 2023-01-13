import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertStatus: "", // either "success" or "error"
  alertMessage: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.showAlert = true;
      state.alertStatus = action.payload.status;
      state.alertMessage = action.payload.message;
    },
    hideAlert: (state) => {
      state.showAlert = false;
      state.alertStatus = "";
      state.alertMessage = "";
    },
  },
});

export const { displayAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
