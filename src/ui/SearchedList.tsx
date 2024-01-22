/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { useAppSelector } from "@/store/hooks";

import { getRecentCities } from "@/store/slice/recentCitiesSlice";

import SearchedItem from "./SearchedItem";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

function SearchedList() {
  const { recentCities } = useAppSelector(getRecentCities);

  return (
    <Grid
      container
      justifyContent="center"
      width={"100%"}
      gap={3}
      sx={{ paddingBottom: "50px" }}
    >
      {!recentCities.length && <Typography>No cities searched yet</Typography>}

      {recentCities?.map((item) => (
        <Grid key={item.city} xs={4} sm={3} md={2}>
          <SearchedItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(SearchedList);
