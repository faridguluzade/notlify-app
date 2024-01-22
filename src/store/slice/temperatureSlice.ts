import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TemperatureState = {
  isFahrenheit: boolean;
};

const initialState: TemperatureState = {
  isFahrenheit: false,
};

const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    toogleTemperature(state, action: PayloadAction<boolean>) {
      state.isFahrenheit = action.payload;
    },
  },
});

export const { toogleTemperature } = temperatureSlice.actions;

export const getTemperature = (state: RootState) => state.temperature;

export default temperatureSlice.reducer;
