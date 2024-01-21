import { configureStore } from "@reduxjs/toolkit";

import weatherSlice from "./slice/weatherSlice";
import temperatureSlice from "./slice/temperatureSlice";
import recentCitiesSlice from "./slice/recentCitiesSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    temperature: temperatureSlice,
    recentCities: recentCitiesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
