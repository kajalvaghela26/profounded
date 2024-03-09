import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.scss";
const SearchBar = ({ onClick, onChange }) => {
  return (
    <div className="div-flex">
      <div className="width-input">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search...."
            onChange={(e) => onChange(e.target.value)}
          />
        </Box>
      </div>
      <div className="btn-width">
        <Box sx={{ "& button": { m: 1 } }}>
          {" "}
          <Button variant="outlined" onClick={onClick}>
            <SearchIcon />
          </Button>
        </Box>
      </div>
    </div>
  );
};
export default SearchBar;
