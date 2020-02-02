import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import { link } from './PageNav.module.scss';

function Link({exact, to, children, onClick}) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemText>
        <NavLink className={link} exact={exact} to={to} activeClassName='active'>{children}</NavLink>
      </ListItemText>
    </ListItem>
  );
}

Link.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;