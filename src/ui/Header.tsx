import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Switch from "@mui/material/Switch";

import WeatherLogo from "@/assets/weather.svg";

function Header() {
  return (
    <Stack spacing={5} sx={{ padding: 3, marginBottom: "-80px" }}>
      <Box sx={{ position: "relative" }}>
        <img src={WeatherLogo} alt="Weather logo" />
        <Typography
          variant="h1"
          color="primary"
          sx={{ position: "absolute", top: 30, left: 50 }}
        >
          Hotlify
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>°C</Typography>
        <Switch color="success" />
        <Typography>°F</Typography>
      </Stack>
    </Stack>
  );
}

export default Header;
