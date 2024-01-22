/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { useAppSelector } from "@/store/hooks";

import { getRecentCities } from "@/store/slice/recentCitiesSlice";

import { SearchWeather } from "@/types";

import Stack from "@mui/material/Stack";
import SearchedItem from "./SearchedItem";

function SearchedList() {
  const { recentCities } = useAppSelector(getRecentCities);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      width={"100%"}
      sx={{ paddingBottom: "50px" }}
    >
      {recentCities?.map((item: SearchWeather) => (
        <SearchedItem key={item.city} item={item} />
      ))}
    </Stack>
  );
}

export default memo(SearchedList);
