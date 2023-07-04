import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const themeSlice = createSlice({
  name: "currentTheme",
  initialState: { currentTheme: true },
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = !state.currentTheme;
    },
  },
});

const persistConfig = {
  key: "currentTheme",
  storage,
  whitelist: ["currentTheme"],
};

export const persistedThemeReducer = persistReducer(
  persistConfig,
  themeSlice.reducer
);

export const { toggleTheme } = themeSlice.actions;
