import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';

import TrendProducts from './TrendProducts/TrendProducts';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import NewProducts from './NewProducts/NewProducts';


// home main
function Main() {
  return (
    <Wrapper class='home-main'>
      <TrendProducts />
      <SpecialOffer />
      <NewProducts />
    </Wrapper>
  )
}

export default Main;