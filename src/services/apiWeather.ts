import axios from "axios";

export const BASE_URL =
  "http://api.weatherapi.com/v1/forecast.json?key=a58ec6b016444cb09d365337230805&q=";

import { WeatherData } from "@/types";
import { getCurrentPosition } from "@/lib/utils";

export async function getWeather(
  searchCity?: string
): Promise<WeatherData | undefined> {
  try {
    if (!searchCity && navigator.geolocation) {
      const position = await getCurrentPosition();
      searchCity =
        position && `${position.coords.latitude},${position.coords.longitude}`;
    }

    const response = await axios.get(BASE_URL + searchCity);

    const data = response.data;
    const formattedWeather: WeatherData = {
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      humidity: data.current.humidity,
      icon: data.current.condition.icon,
      city: data.location.region,
      wind: data.current.wind_mph,
      time: data.location.localtime,
    };

    return formattedWeather;
  } catch (error) {
    throw new Error("Invalid city or something went wrong!");
  }
}
