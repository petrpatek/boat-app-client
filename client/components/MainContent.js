import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  }
});

const MainContent = (props) => {
  const { classes } = props;

  return (
    <main className={classes.content}>
      {props.children}
    </main>
  );
};
MainContent.proTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContent);
