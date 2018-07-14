import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
    marginTop: '8px'
  },
});

const SideMenu = (props) => {
  const { classes } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {props.accountSection}
      <Divider />

      {props.linkSection}
    </Drawer>
  );
};

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  accountSection: PropTypes.array,
  linkSection: PropTypes.array,

};
SideMenu.defaultProps = {
  accountSection: [
    <Typography variant="body2" key="noACC">
    NoAccount
    </Typography>
  ],
  linkSection: [
    <Typography variant="body2" key="NOLink">
    NoLinks
    </Typography>
  ],
};

export default withStyles(styles)(SideMenu);
