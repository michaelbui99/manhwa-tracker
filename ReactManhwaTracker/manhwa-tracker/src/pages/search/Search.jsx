import * as React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.scss";
const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__input}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
