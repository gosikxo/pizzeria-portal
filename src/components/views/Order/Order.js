import React from 'react';
import PropTypes from 'prop-types';

import { component } from './Order.scss';

function Order({match: { params: { id }}}) {
  return (
    <div className={component}>
      <h1>Order: {id}</h1>
    </div>
  );
}

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;
