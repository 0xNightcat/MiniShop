import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderFull from '../header/HeaderFull/HeaderFull';
import NewsLetter from '../../containers/Home/NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
import Main from '../../containers/Product/Main/Main';

// product layer
function ProductLayer() {
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

export default ProductLayer;