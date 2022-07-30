import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

import useStyles from './styles.js';

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);
  const onLoad = (a) => setAutoComplete(a)
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({lat, lng});
  }

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Kevin's Little Map
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore something new?
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search …" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;