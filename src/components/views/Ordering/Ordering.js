import React from 'react';
import { Link } from 'react-router-dom';

import { component } from './Ordering.scss';

function Ordering() {
  return (
    <div className={component}>
      <h1>Ordering</h1>
      <Link to="/ordering/new/">Make new order</Link>
      <Link to="/ordering/order/nice-order">Nice order</Link>
    </div>
  );
}

Ordering.propTypes = {

};

export default Ordering;
