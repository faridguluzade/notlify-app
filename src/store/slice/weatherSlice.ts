import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { getWeather as getWeatherApi } from "@/services/apiWeather";
import { WeatherData, WeatherSearchParams } from "@/types";
import { RootState } from "../store";
import { setRecentCities } from "./recentCitiesSlice";

type WeatherState = {
  weather?: WeatherData;
  error?: string;
  loading: boolean;
};

const initialState: WeatherState = {
  weather: undefined,
  error: "",
  loading: false,
};

export const fetchWeather = createAsyncThunk(
  "weather/getWeather",
  async ({ searchCity, date }: WeatherSearchParams, { dispatch }) => {
    const data = await getWeatherApi({ searchCity, date });

    if (searchCity && data) {
      const storedCities = localStorage.getItem("recentCities");
      const recentCities = storedCities ? JSON.parse(storedCities) : [];
      let existingItem;

      if (recentCities.length) {
        existingItem = recentCities.find(
          (item: WeatherData) => item.city === data.city
        );
      }

      if (!existingItem) {
        recentCities.unshift(data);

        if (recentCities.length > 5) {
          recentCities.pop();
        }
      }

      localStorage.setItem("recentCities", JSON.stringify(recentCities));
      dispatch(setRecentCities(recentCities));
    }

    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.weather = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error(state.error as string);
    });
  },
});

export const getWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
