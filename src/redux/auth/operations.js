import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goose-track-backend-i4mr.onrender.com";

export const register = createAsyncThunk(
  "auth/register",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/auth/register", userdata);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/auth/login", userdata);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
