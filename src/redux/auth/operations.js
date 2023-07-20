import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import i18n from "../../assets/translation/i18n";

let store;

export const injectStore = (_store) => {
  store = _store;
};

// axios.defaults.baseURL = "https://goose-track-backend-i4mr.onrender.com";

axios.defaults.baseURL = "http://localhost:3001";

const $api = axios.create({
  // baseURL: "https://goose-track-backend-i4mr.onrender.com",
  baseURL: "http://localhost:3001",
});

const token = {
  set(token) {
    $api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    $api.defaults.headers.common.Authorization = "";
  },
};

$api.interceptors.request.use(
  function (config) {
    if (!config.headers["Authorization"]) {
      const token = store.getState().auth.accessToken;

      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      // else {
      //   const cookie = document.cookie
      //     .split(";")
      //     .find((item) => item.includes("access_token"));

      //   const cookieToken = cookie.split("=");
      //   config.headers["Authorization"] = "Bearer " + cookieToken[1];
      // }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  async function (response) {
    const keys = Object.keys(response.data);
    const originalRequest = response.config;

    if (keys.includes("accessToken") && !originalRequest._retry) {
      store.dispatch(refresh(response.data));

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
      toast.success(i18n.t("Registration success"));
      return response.data;
    } catch (e) {
      toast.error(i18n.t(e.response.data.message));
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
      toast.success(i18n.t("Login success"));
      return response.data;
    } catch (e) {
      toast.error(i18n.t(e.response.data.message));
      return rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (interceptoreResponse, { getState, rejectWithValue }) => {
    try {
      if (interceptoreResponse) {
        return interceptoreResponse;
      } else {
        const state = getState();
        const currentToken = state.auth.accessToken;
        let response;
        let cookieToken;

        if (!currentToken) {
          const cookie = document.cookie
            .split(";")
            .find((item) => item.includes("access_token"));

          cookieToken = cookie.split("=");

          if (!cookieToken) {
            return rejectWithValue();
          }

          response = await axios.get("api/auth/refresh", {
            headers: {
              Authorization: `Bearer ${cookieToken[1]}`,
            },
          });
        } else {
          response = await axios.get("api/auth/refresh", {
            headers: {
              Authorization: `Bearer ${currentToken}`,
            },
          });
        }

        const keys = Object.keys(response.data);

        if (keys.includes("accessToken")) {
          token.set(response.data.accessToken);
        } else {
          currentToken ? token.set(currentToken) : token.set(cookieToken[1]);
        }

        const correctedResponse = { ...response.data, isLoggedIn: true };

        return correctedResponse;
      }
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
      toast.error(i18n.t(e.response.data.message));
      return rejectWithValue(e.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await $api.patch("api/auth/user", userData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=a1f8bdc2e9c7a5eef43d73e79fc8b2a1`,
        },
      });
      toast.success(i18n.t("User data updated"));
      return data;
    } catch (e) {
      toast.error(i18n.t(e.response.data.message));
      return rejectWithValue(e.message);
    }
  }
);

export default $api;
