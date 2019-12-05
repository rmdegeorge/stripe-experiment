// App.js

import React from 'react';
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from '.MyStoreCheckout';

function App() {
  return (
    <div className="App">
      <StripeProvider apiKey="pk_test_12345">
        <MyStoreCheckout />
      </StripeProvider>
    </div>
  );
};

export default App;
