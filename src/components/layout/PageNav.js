import React from 'react';
import { NavLink } from 'react-router-dom';
import { PUBLIC_URL } from '../../settings.js';

function PageNav() {
  return (
    <nav>
      <NavLink exact to={`${PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={'/tables'} activeClassName='active'>Tables</NavLink>
      <NavLink to={'/ordering'} activeClassName='active'>Ordering</NavLink>
      <NavLink to={'/ordering/new'} activeClassName='active'>New Order</NavLink>
      <NavLink to={'/kitchen'} activeClassName='active'>Kitchen</NavLink>
    </nav>
  );
}

export default PageNav;