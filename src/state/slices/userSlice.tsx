import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Api } from "../../services/Api";

// Define a type for the slice state
interface UserState {
  status: { user: "idle" | "pending" | "succeeded" | "failed" };
  user: any;
}

// Define the initial state using that type
const initialState: UserState = {
  status: { user: "idle" },
  user: null,
};

const api = new Api();

// First, create the thunk
export const getRandomUserAsync = createAsyncThunk(
  "users/getRandomUser",
  async () => {
    const response = await api.getRandomUser();
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomUserAsync.pending, (state) => {
        state.status.user = "pending";
      })
      .addCase(getRandomUserAsync.rejected, (state) => {
        state.status.user = "failed";
      })
      .addCase(getRandomUserAsync.fulfilled, (state, action) => {
        state.status.user = "idle";
        state.user = action.payload.results[0];
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
