import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { WeatherData } from "@/types";

type CitiesState = {
  recentCities: WeatherData[];
};

const initialState: CitiesState = {
  recentCities: [] as WeatherData[],
};

const recentCitiesSlice = createSlice({
  name: "recentCities",
  initialState,
  reducers: {
    setRecentCities: (state, action) => {
      state.recentCities = action.payload;
    },
  },
});

export const { setRecentCities } = recentCitiesSlice.actions;

export const getRecentCities = (state: RootState) => state.recentCities;

export default recentCitiesSlice.reducer;
