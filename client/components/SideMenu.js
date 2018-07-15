import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';


import { withStyles } from '@material-ui/core/styles';

import NavLink from './NavLink';

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
      <List>
        <NavLink link="dock" text="Dock Mode" icon={<HomeIcon />} />
        <NavLink link="/drive" text="Drive Mode" />
      </List>
      <Divider />
    </Drawer>
  );
};

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired

};


export default withStyles(styles)(SideMenu);
