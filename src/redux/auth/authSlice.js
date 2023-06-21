import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;
