import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderFull from '../header/HeaderFull/HeaderFull';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
import Main from '../../containers/Shop/Main/Main';

// shop layer
function ShopLayer() {
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

export default ShopLayer;