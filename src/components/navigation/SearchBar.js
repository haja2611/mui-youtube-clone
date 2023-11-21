import React from "react";
import { Box } from "@mui/system";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import { BsFillMicFill } from "react-icons/bs";

import { Search } from "@mui/icons-material";
import { flexAlignCenter, searchBar } from "../../styles/styles";
import SearchContext from "../../context/SearcchContext";

const SearchBar = () => {
  const ctx = React.useContext(SearchContext);
  const [search, setSearch] = React.useState("");
  return (
    <Box sx={flexAlignCenter}>
      <Paper
        component="form"
        sx={searchBar}
        style={{
          borderRadius: "20px",
          width: "600px",
        }}
      >
        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          sx={{ ml: 1, flex: 1, pl: 1 }}
          placeholder="Search"
          value={ctx.searchText}
        />
        <IconButton
          type="button"
          onClick={() => ctx.onSearch(search)}
          sx={{ backgroundColor: "#eee", borderRadius: "0 20px 20px 0" }}
          aria-label="search"
        >
          {" "}
          <Search />
        </IconButton>
      </Paper>
      <Button
        sx={{
          minWidth: "auto",
          backgroundColor: "#eee",
          borderRadius: "20px",
          padding: 1.5,
        }}
      >
        <BsFillMicFill size={18} />
      </Button>
    </Box>
  );
};

export default SearchBar;
