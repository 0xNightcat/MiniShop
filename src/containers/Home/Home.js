import './Home.scss';
import Wrapper from '../../hoc/Wrapper';
import HomeLayer from '../../components/layers/HomeLayer';
import sliderImage from '../../assets/static/header-big.jpg';

// home component
function Home() {
  return (
    <Wrapper class='home-inner'>
      <HomeLayer headerSlider={sliderImage} />
    </Wrapper>
  )
}

export default Home;