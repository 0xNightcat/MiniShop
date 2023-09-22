import './Shop.scss';

import Wrapper from '../../hoc/Wrapper';
import ShopLayer from '../../components/layers/ShopLayer';

function Shop() {
  return (
   <Wrapper class='shop-inner'>
      <ShopLayer />
   </Wrapper>
  )
}

export default Shop;