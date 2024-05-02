// Header.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import useStyles from "./styles.js";

const Header = ({ onPlaceChanged, onLoad, onSearch }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState(""); // State to store search input value

  // Function to handle search action
  const handleSearch = () => {
    if (onSearch && searchInput) {
      onSearch(searchInput); // Call onSearch callback with search input
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                onChange={(e) => setSearchInput(e.target.value)} // Update search input value
              />
            </div>
          </Autocomplete>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon onClick={handleSearch} /> {/* Call handleSearch when the search icon is clicked */}
          </IconButton>
          <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button> {/* Call handleSearch when the button is clicked */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;




