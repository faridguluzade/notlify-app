import Stack from "@mui/material/Stack";

import Navigation from "./Navigation";
import Search from "./Search";

function Overview() {
  return (
    <Stack spacing={6}>
      <Navigation />
      <Search />
    </Stack>
  );
}

export default Overview;
