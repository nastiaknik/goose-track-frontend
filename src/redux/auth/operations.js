import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://goose-track-backend-i4mr.onrender.com";

const $api = axios.create({
  baseURL: "https://goose-track-backend-i4mr.onrender.com",
});

const token = {
  set(token) {
    $api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    $api.defaults.headers.common.Authorization = "";
  },
};

$api.interceptors.response.use(
  function (response) {
    const keys = Object.keys(response.data);
    const originalRequest = response.config;

    if (keys.includes("accessToken") && !originalRequest._retry) {
      originalRequest._retry = true;
      token.set(response.data.accessToken);

      originalRequest.headers["Authorization"] =
        "Bearer " + response.data.accessToken;

      return axios(originalRequest);
    } else {
      return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/auth/register", userdata);
      toast.success("Registration success");
      return response.data;
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/auth/login", userdata);
      token.set(response.data.accessToken);
      toast.success("Login success");
      return response.data;
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const currentToken = state.auth.accessToken;

      if (!currentToken) {
        return rejectWithValue();
      }

      const response = await axios.get("api/auth/refresh", {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      const keys = Object.keys(response.data);
      keys.includes("accessToken")
        ? token.set(response.data.accessToken)
        : token.set(currentToken);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await $api.post("api/auth/logout");
      token.unset();
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get("api/auth/current");
      return data;
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (userData, { rejectWithValue }) => {
    try {
      /* const boundary = crypto.randomBytes(16).toString("hex");*/
      const { data } = await $api.patch("api/auth/user", userData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=a1f8bdc2e9c7a5eef43d73e79fc8b2a1`,
        },
      });
      toast.success("User data updated");
      return data;
    } catch (e) {
      toast.error(e.response.data.message);
      return rejectWithValue(e.message);
    }
  }
);

export default $api;
