import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const initialState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  // isRefreshingUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        // state.accessToken = action.payload.accessToken;
        // state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        // state.isRefreshingUser = false;
      })
      .addMatcher(isAnyOf(login.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(login.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
