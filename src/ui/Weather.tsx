import { useAppSelector } from "@/store/hooks";
import { getWeather } from "@/store/slice/weatherSlice";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { LocationIcon, TemperatureIcon } from "@/assets/icons/icons";
import { formatDate } from "@/lib/utils";

function Weather() {
  const { weather } = useAppSelector(getWeather);

  const { city, humidity, tempC, tempF, icon, wind, time } = weather;

  return (
    <Stack
      justifyContent="space-between"
      sx={{
        width: "90%",
        minHeight: "425px",
        background: "linear-gradient(113deg, #AD36CB 32.23%, #333 67.37%)",
        padding: 4,
        borderRadius: "32px",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        {/* Location */}
        <Stack direction="row" gap={1} alignItems="center">
          <Typography>{city}</Typography>
          <LocationIcon />
        </Stack>

        {/* Date  */}
        <Typography>{formatDate(time)}</Typography>
      </Stack>

      {/* Current Temp */}
      <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <TemperatureIcon />
        <Typography variant="h2">{tempC}°C</Typography>
        <img src={icon} alt="Cloud Image" />
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        {/* Humidty */}
        <Stack textAlign="center">
          <Typography>Humidity</Typography>
          <Typography>{humidity}%</Typography>
        </Stack>

        {/* Wind */}
        <Stack textAlign="center">
          <Typography>Wind</Typography>
          <Typography>{wind}mph</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Weather;
