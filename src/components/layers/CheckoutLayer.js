import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderFull from '../header/HeaderFull/HeaderFull';
import NewsLetter from '../../containers/Home/NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
import Main from '../../containers/Checkout/Main/Main';

function CheckoutLayer() {
  return (
    <Wrapper class='checkout'>
      <Header />
      <HeaderFull />
      <Main />
      <NewsLetter />
      <Footer />
    </Wrapper>
  )
}

export default CheckoutLayer;