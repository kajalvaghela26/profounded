import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "../Sidebar/materialUICSS";
import { IconButton, Grid, InputBase } from "@mui/material";
const SearchBar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.searchContainer}>
        <Grid item xs={12} sm={8} md={6}>
          <InputBase
            className={classes.searchInput}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Grid>
        <Grid item>
          <IconButton className={classes.searchIcon} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchBar;
