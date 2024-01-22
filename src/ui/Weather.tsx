import { useAppSelector } from "@/store/hooks";
import { getWeather } from "@/store/slice/weatherSlice";
import { getTemperature } from "@/store/slice/temperatureSlice";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import { LocationIcon, TemperatureIcon } from "@/assets/icons/icons";
import { formatDate } from "@/lib/utils";

function Weather() {
  const { weather, loading, error } = useAppSelector(getWeather);
  const { isFahrenheit } = useAppSelector(getTemperature);

  return (
    <Stack
      sx={{
        width: "90%",
        minHeight: "425px",
        background: "linear-gradient(113deg, #AD36CB 32.23%, #333 67.37%)",
        padding: 4,
        borderRadius: "32px",
        justifyContent: `${loading || error ? "center" : "space-between"}`,
        alignItems: `${loading || error ? "center" : "self"}`,
      }}
    >
      {loading && <CircularProgress style={{ color: "white" }} />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && weather && (
        <>
          <Stack direction="row" justifyContent="space-between">
            {/* Location */}
            <Stack direction="row" gap={1} alignItems="center">
              <Typography>{weather.city}</Typography>
              <LocationIcon />
            </Stack>

            {/* Date  */}
            <Typography>{formatDate(weather.time)}</Typography>
          </Stack>

          {/* Current Temp */}
          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <TemperatureIcon />
            <Typography variant="h2">
              {!isFahrenheit
                ? ` ${Math.round(+weather.tempC)}°C`
                : ` ${Math.round(+weather.tempF)}°F`}
            </Typography>
            <img src={weather?.icon} alt="Cloud Image" />
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            {/* Humidty */}
            <Stack textAlign="center">
              <Typography>Humidity</Typography>
              <Typography>{weather.humidity}%</Typography>
            </Stack>

            {/* Wind */}
            <Stack textAlign="center">
              <Typography>Wind</Typography>
              <Typography>{weather.wind} mph</Typography>
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default Weather;
