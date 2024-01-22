import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch } from "@/store/hooks";
import { fetchWeather } from "@/store/slice/weatherSlice";

import Navigation from "./Navigation";
import Search from "./Search";
import Weather from "./Weather";
import SearchedList from "./SearchedList";
import Stack from "@mui/material/Stack";

function Overview() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const searchCity = searchParams.get("query") || undefined;
  const date = searchParams.get("date") || "today";

  useEffect(() => {
    dispatch(fetchWeather({ searchCity, date }));
  }, [dispatch, searchCity, date]);

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
