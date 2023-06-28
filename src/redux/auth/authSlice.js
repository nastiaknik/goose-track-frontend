import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  login,
  register,
  refresh,
  logout,
  getUserInfo,
  updateUserInfo,
} from "./operations";

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
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refresh.pending,
          logout.pending,
          getUserInfo.pending,
          updateUserInfo.pending
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
          logout.rejected,
          getUserInfo.rejected,
          updateUserInfo.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isRefreshingUser = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
