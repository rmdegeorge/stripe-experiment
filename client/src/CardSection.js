// CardSection.js

import React from 'react';
import {CardElement} from 'react-stripe-elements';

function CardSection(props) {
  return (
    <label>
      Card details
      <CardElement style={{base: {fontSize: '18px'}}} />
    </label>
  );
};

export default CardSection;
