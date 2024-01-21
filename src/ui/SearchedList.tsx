import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  getRecentCities,
  setRecentCities,
} from "@/store/slice/recentCitiesSlice";

import SearchedItem from "./SearchedItem";

function SearchedList() {
  const { recentCities } = useAppSelector(getRecentCities);
  const dispatch = useAppDispatch();

  useEffect(
    function () {
      const storedCities = localStorage.getItem("recentCities");

      const recentCities = storedCities ? JSON.parse(storedCities) : [];

      dispatch(setRecentCities(recentCities));
    },
    [dispatch]
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      width={"100%"}
      sx={{ paddingBottom: "50px" }}
    >
      {recentCities?.map((item) => (
        <SearchedItem key={item.city} item={item} />
      ))}
    </Stack>
  );
}

export default SearchedList;
