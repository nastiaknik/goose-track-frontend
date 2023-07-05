import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { injectStore } from "./auth/operations";
import { authReducer } from "./auth/authSlice";
import { persistedThemeReducer } from "./theme/themeSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";
import { tasksReducer } from "./tasks/tasksSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistedThemeReducer,
    reviews: reviewsReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

injectStore(store);

export const persistor = persistStore(store);
