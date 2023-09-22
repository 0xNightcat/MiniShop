import React from 'react';

import './Cart.scss';

import CartLayer from '../../components/layers/CartLayer';
import Wrapper from '../../hoc/Wrapper';

function Cart() {
  return (
    <Wrapper class='cart-inner'>
      <CartLayer />
    </Wrapper>
  )
}

export default Cart;