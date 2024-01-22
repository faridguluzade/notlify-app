import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SearchWeather } from "@/types";

type WeathersState = {
  recentCities: SearchWeather[];
};

const initialState: WeathersState = {
  recentCities: [] as SearchWeather[],
};

const recentCitiesSlice = createSlice({
  name: "recentCities",
  initialState,
  reducers: {
    setRecentCities: (state, action: PayloadAction<SearchWeather>) => {
      const existingItem = state.recentCities.find(
        (item) => item.city === action.payload.city
      );

      if (existingItem) return;

      state.recentCities.unshift(action.payload);

      if (state.recentCities.length > 5) {
        state.recentCities.pop();
      }
    },
  },
});

export const { setRecentCities } = recentCitiesSlice.actions;

export const getRecentCities = (state: RootState) => state.recentCities;

export default recentCitiesSlice.reducer;
