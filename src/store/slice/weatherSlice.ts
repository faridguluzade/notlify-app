import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { RootState } from "../store";

import { getWeather as getWeatherApi } from "@/services/apiWeather";
import { SearchWeather, WeatherData, WeatherSearchParams } from "@/types";
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

    if (data && searchCity) {
      const searchWeather: SearchWeather = {
        tempC: data.tempC,
        tempF: data.tempF,
        icon: data.icon,
        city: data.city,
      };

      dispatch(setRecentCities(searchWeather));
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
