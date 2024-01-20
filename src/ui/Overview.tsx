import { useEffect } from "react";
import { fetchWeather } from "@/store/slice/weatherSlice";
import { useAppDispatch } from "@/store/hooks";

import Navigation from "./Navigation";
import Search from "./Search";
import Weather from "./Weather";
import SearchedList from "./SearchedList";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";

function Overview() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const searchCity = searchParams.get("query") || undefined;

  useEffect(
    function () {
      dispatch(fetchWeather(searchCity));
    },
    [dispatch, searchCity]
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
