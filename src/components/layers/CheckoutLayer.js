import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderFull from '../header/HeaderFull/HeaderFull';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
import Main from '../../containers/Checkout/Main/Main';

// checkout layer
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