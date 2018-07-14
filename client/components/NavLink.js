import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BoatIcon from '@material-ui/icons/DirectionsBoat';


const NavLink = props => (
  <Link to={props.link} >
    <ListItem button>

      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  </Link>
);

NavLink.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string
};

NavLink.defaultProps = {
  link: '/',
  icon: <BoatIcon />,
  text: 'DefaultLink'
};

export default NavLink;
