import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { SearchIcon } from "@/assets/icons/icons";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const term = ref.current?.value;

    if (term) {
      searchParams.set("query", term);
    } else {
      searchParams.delete("query");
    }

    setSearchParams(searchParams);
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "70%" }}>
      <TextField
        inputRef={ref}
        // onChange={(e) => handleSearch(e.target.value)}
        label={"Seacrh city..."}
        variant="outlined"
        color="secondary"
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

export default Search;
