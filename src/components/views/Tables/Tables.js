import React from 'react';
import { component } from './Tables.scss';
import { Link } from 'react-router-dom';

function Tables() {
  return (
    <div className={component}>
      <h1>Tables</h1>
      <Link to="/tables/booking/nice-booking">Nice Booking</Link>
      <Link to="/tables/event/nice-event">Nice Event</Link>
    </div>
  );
}

Tables.propTypes = {

};

export default Tables;
