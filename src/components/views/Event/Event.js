import React from 'react';
import PropTypes from 'prop-types';

import { component } from './Event.scss';

function Event({match: { params: { id }}}) {
  return (
    <div className={component}>
      <h1>Event: {id}</h1>
    </div>
  );
}

Event.propTypes = {
  match: PropTypes.object,
};

export default Event;
