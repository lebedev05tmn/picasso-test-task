// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./features/api";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
