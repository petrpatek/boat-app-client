import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
});

const Navbar = (props) => {
  const { classes } = props;

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Kontrola lodi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
Navbar.proTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
