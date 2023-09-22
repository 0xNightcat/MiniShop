import React from 'react';

import './Checkout.scss';

import Wrapper from '../../hoc/Wrapper';
import CheckoutLayer from '../../components/layers/CheckoutLayer';

function Checkout() {
  return (
    <Wrapper class='checkout-inner'>
      <CheckoutLayer />
    </Wrapper>
  )
}

export default Checkout;