import axios from "axios";
import { format, addDays } from "date-fns";

export const BASE_URL =
  "http://api.weatherapi.com/v1/forecast.json?key=a58ec6b016444cb09d365337230805&q=";

import { WeatherData } from "@/types";
import { getCurrentPosition } from "@/lib/utils";

export async function getWeather({
  searchCity,
  date,
}: {
  searchCity?: string;
  date: string;
}): Promise<WeatherData | undefined> {
  try {
    let url: string = BASE_URL;
    const currentDate = new Date();
    let dateParam: string;

    if (!searchCity && navigator.geolocation) {
      const position = await getCurrentPosition();
      searchCity =
        position && `${position.coords.latitude},${position.coords.longitude}`;
    }

    if (!searchCity) {
      throw new Error("City not found!");
    }

    // format the url
    url += searchCity;

    if (date === "tomorrow") {
      dateParam = format(addDays(currentDate, 1), "yyyy-MM-dd");

      url += `&dt=${dateParam}`;
    }

    const response = await axios.get(url);

    const data = response.data;

    console.log(data);

    let weather: WeatherData;

    if (date === "tomorrow") {
      const { forecastday } = data.forecast;

      weather = {
        tempC: forecastday[0].day.avgtemp_c,
        tempF: forecastday[0].day.avgtemp_f,
        humidity: forecastday[0].day.avghumidity,
        icon: forecastday[0].day.condition.icon,
        city: data.location.name,
        wind: forecastday[0].day.maxwind_mph,
        time: forecastday[0].date,
      };

      return weather;
    }

    weather = {
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      humidity: data.current.humidity,
      icon: data.current.condition.icon,
      city: data.location.name,
      wind: data.current.wind_mph,
      time: data.forecast.forecastday[0].date,
    };

    return weather;
  } catch (error) {
    throw new Error("Invalid city or something went wrong!");
  }
}
