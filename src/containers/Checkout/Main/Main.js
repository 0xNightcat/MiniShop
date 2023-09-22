import React from 'react';
import { Container } from 'react-bootstrap';

import './Main.scss';

import Wrapper from '../../../hoc/Wrapper';

function Main() {
  return (
    <Wrapper class='checkout-main text-center'>
      <Container>
         <h2>Checkout</h2>
      </Container>
    </Wrapper>
  )
}

export default Main;