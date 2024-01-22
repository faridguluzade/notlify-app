import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

import TemperatureSwitch from "./TemperatureSwitch";
import WeatherLogo from "@/assets/weather.svg";

function Header() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <Stack
      spacing={5}
      direction={`${matches ? "row" : "column"}`}
      justifyContent="space-between"
      sx={{ padding: 3, marginBottom: `${!matches ? "-80px" : "0px"} ` }}
    >
      <Box sx={{ position: "relative" }}>
        <img src={WeatherLogo} alt="Weather logo" />
        <Typography
          variant="h1"
          sx={{ position: "absolute", top: 30, left: 50 }}
        >
          Hotlify
        </Typography>
      </Box>

      <TemperatureSwitch />
    </Stack>
  );
}

export default Header;
