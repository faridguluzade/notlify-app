import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { getWeather as getWeatherApi } from "@/services/apiWeather";
import { WeatherData } from "@/types";
import { RootState } from "../store";

type WeatherState = {
  weather?: WeatherData;
  error?: string;
  loading: boolean;
};

const initialState: WeatherState = {
  weather: {} as WeatherData,
  error: "",
  loading: false,
};

export const fetchWeather = createAsyncThunk("weather/getWeather", async () => {
  const data = await getWeatherApi();
  return data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.weather = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const getWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
