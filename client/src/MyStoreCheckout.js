// MyStoreCheckout.js

import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

function MyStoreCheckout(props) {
  return (
    <Elements>
      <InjectedCheckoutForm />
    </Elements>
  );
};

export default MyStoreCheckout;
