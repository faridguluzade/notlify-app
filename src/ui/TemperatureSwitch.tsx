import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  getTemperature,
  toogleTemperature,
} from "@/store/slice/temperatureSlice";

import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

function TemperatureSwitch() {
  const { isFahrenheit } = useAppSelector(getTemperature);
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>°C</Typography>
      <Switch
        checked={isFahrenheit}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(toogleTemperature(e.target.checked))
        }
        color="success"
      />
      <Typography>°F</Typography>
    </Stack>
  );
}

export default TemperatureSwitch;
