import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {
  LightbulbOutline as LightbulbOutlineIcon,
  LightbulbFull as LightbulbFullIcon,
} from '@material-ui/docs';

function SimpleAppBar(props) {
  const { toggleDarkTheme, theme } = props;

  return (
    <AppBar position="static" color="default">
      <Grid container alignItems='center'>
        <Grid item container xs={12} alignItems="flex-end" direction="column">
          <Tooltip title='Toggle Light/Dark theme' enterDelay={300} placement="right">
            <IconButton
                color="inherit"
                onClick={toggleDarkTheme}
                aria-label='Toggle Light/Dark theme'
                data-ga-event-category="AppBar"
                data-ga-event-action="dark"
              >
              {theme.palette.type === 'light' ? (
                <LightbulbOutlineIcon />
              ) : (
                <LightbulbFullIcon />
              )}
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default SimpleAppBar;
