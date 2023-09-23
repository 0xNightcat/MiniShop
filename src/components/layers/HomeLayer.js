import Wrapper from '../../hoc/Wrapper';
import Header from '../header/Header';
import HeaderSlide from '../../containers/Home/HeaderSlide/HeaderSlide';
import TopSales from '../../containers/Home/TopSales/TopSales';
import Main from '../../containers/Home/Main/Main';
import NewsLetter from '../../containers/Home/NewsLetter/NewsLetter';
import Footer from '../footer/Footer';

// home layer
function HomeLayer({ headerSlider }) {
  return (
    <Wrapper class='home'>
      <Header />
      <HeaderSlide headSlider={headerSlider} />
      <TopSales />
      <Main />
      <NewsLetter />
      <Footer />
    </Wrapper>
  )
}

export default HomeLayer;