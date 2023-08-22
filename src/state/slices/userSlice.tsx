import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../services/Api";

interface UserState {
  status: { user: "idle" | "pending" | "succeeded" | "failed" };
  user: any;
}

const initialState: UserState = {
  status: { user: "idle" },
  user: null,
};

const api = new Api();

export const getRandomUserAsync = createAsyncThunk(
  "users/getRandomUser",
  async () => {
    const response = await api.getRandomUser();
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
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
