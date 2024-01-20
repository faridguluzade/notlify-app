import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { SearchIcon } from "@/assets/icons/icons";

function Search() {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <TextField
      onChange={(e) => handleSearch(e.target.value)}
      label={"Seacrh city..."}
      variant="outlined"
      color="secondary"
      sx={{ width: "70%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;
