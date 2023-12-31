import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderFull from '../header/HeaderFull/HeaderFull';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
import Main from '../../containers/Cart/Main/Main';

// cart layer
function CartLayer() {
  return (
    <Wrapper class='shop'>
      <Header />
      <HeaderFull />
      <Main />
      <NewsLetter />
      <Footer />
    </Wrapper>
  )
}

export default CartLayer;