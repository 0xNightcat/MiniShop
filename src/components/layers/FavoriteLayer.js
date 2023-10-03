import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderFull from '../header/HeaderFull/HeaderFull';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../footer/Footer';
import Main from '../../containers/Favorites/Main/Main';

// favorites layer
function FavoritesLayer() {
  return (
    <Wrapper class='favorites'>
      <Header />
      <HeaderFull />
      <Main />
      <NewsLetter />
      <Footer />
    </Wrapper>
  )
}

export default FavoritesLayer;