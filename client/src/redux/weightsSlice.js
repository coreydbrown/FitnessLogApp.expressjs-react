import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFetch from "../services/axios";

const initialState = {
  weights: [],
  statusGetAll: "idle", // "idle", "loading", "succeeded", "failed"
  errorGetAll: null,
  statusAdd: "idle",
  errorAdd: null,
};

export const weightsSlice = createSlice({
  name: "weights",
  initialState,
  reducers: {
    resetStatusAdd: (state) => {
      state.statusAdd = "idle";
    },
  },
  extraReducers(builder) {
    builder
      // GET ALL WEIGHTS
      .addCase(fetchWeights.pending, (state, action) => {
        state.statusGetAll = "loading";
      })
      .addCase(fetchWeights.fulfilled, (state, action) => {
        state.statusGetAll = "succeeded";
        state.weights = action.payload.weights;
      })
      .addCase(fetchWeights.rejected, (state, action) => {
        state.statusGetAll = "failed";
        state.errorGetAll = action.error.message;
      })

      // ADD WEIGHT
      .addCase(addWeight.pending, (state, action) => {
        state.statusAdd = "loading";
      })
      .addCase(addWeight.fulfilled, (state, action) => {
        state.statusAdd = "succeeded";
        state.weights.push(action.payload.weight);
      })
      .addCase(addWeight.rejected, (state, action) => {
        state.statusAdd = "failed";
        state.errorAdd = action.error.message;
      });
  },
});

export const fetchWeights = createAsyncThunk(
  "weights/fetchWeights",
  async () => {
    const response = await axiosFetch.get("/weight");
    return response.data;
  }
);

export const addWeight = createAsyncThunk(
  "weights/addWeight",
  async (newWeight) => {
    const response = await axiosFetch.post("/weight", newWeight);
    return response.data;
  }
);

export const { resetStatusAdd } = weightsSlice.actions;

export default weightsSlice.reducer;
