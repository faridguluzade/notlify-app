import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import weatherSlice from "./slice/weatherSlice";
import temperatureSlice from "./slice/temperatureSlice";
import recentCitiesSlice from "./slice/recentCitiesSlice";

const rootReducer = combineReducers({
  weather: weatherSlice,
  temperature: temperatureSlice,
  recentCities: recentCitiesSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["recentCities", "temperature"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
