import React from 'react';
import PropTypes from 'prop-types';
import { component } from './Booking.module.scss';

function Booking({match: { params: { id }}}) {
  return (
    <div className={component}>
      <h1>Booking: {id}</h1>
    </div>
  );
}

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;
