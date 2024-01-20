import { useEffect } from "react";
import { fetchWeather } from "@/store/slice/weatherSlice";
import { useAppDispatch } from "@/store/hooks";

import Navigation from "./Navigation";
import Search from "./Search";
import Weather from "./Weather";
import SearchedList from "./SearchedList";
import Stack from "@mui/material/Stack";

function Overview() {
  const dispatch = useAppDispatch();

  useEffect(
    function () {
      dispatch(fetchWeather());
    },
    [dispatch]
  );

  return (
    <Stack component="main" alignItems="center" gap={6}>
      <Navigation />
      <Search />
      <Weather />
      <SearchedList />
    </Stack>
  );
}

export default Overview;
