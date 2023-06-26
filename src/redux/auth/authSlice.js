import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, register, refresh, logout } from "./operations";

const initialState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshingUser = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshingUser = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshingUser = false;

        if (action.payload.accessToken) {
          state.accessToken = action.payload.accessToken;
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefreshingUser = false;
        state.error = null;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshingUser = true;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refresh.pending,
          logout.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refresh.rejected,
          logout.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isRefreshingUser = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
