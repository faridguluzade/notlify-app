export type WeatherData = {
  tempC: string;
  tempF: string;
  humidity: string;
  icon: string;
  city: string;
  wind: string;
  time: string;
};

export type WeatherSearchParams = {
  searchCity?: string;
  date: string;
};
