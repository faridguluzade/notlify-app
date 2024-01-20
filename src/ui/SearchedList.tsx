import Stack from "@mui/material/Stack";
import SearchedItem from "./SearchedItem";

function SearchedList() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      width={"100%"}
      sx={{ paddingBottom: "50px" }}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SearchedItem key={item} />
      ))}
    </Stack>
  );
}

export default SearchedList;
