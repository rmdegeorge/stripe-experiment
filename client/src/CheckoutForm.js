// CheckoutForm.js

import React from 'react';
import {injectStripe} from 'react-stripe-elements';

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

function CheckoutForm(props) {
  const handleSubmit = (e) => {
    e.preventefault();

    const cardElement = props.elements.getElement('card');

    props.stripe
      .createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {name: 'Jenny Rosen'},
      })
      .then(({paymentMethod}) => {
        console.log('Received Stripe paymentMethod:', paymentMethod);
      });

    props.stripe.confirmCardSetup('{PAYMENT_INTENT_CLIENT_SECRET}', {
      payment_method: {
        card: cardElement,
      },
    });

    props.stripe.createSource({
      type: 'card',
      owner: {
        name: 'Jenny Rosen',
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <AddressSection /> */}
      <CardSection />
      <button>Confirm Order</button>
    </form>
  );
};
export default injectStripe(CheckoutForm);
