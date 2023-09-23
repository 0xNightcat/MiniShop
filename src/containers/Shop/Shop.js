import './Shop.scss';
import Wrapper from '../../hoc/Wrapper';
import ShopLayer from '../../components/layers/ShopLayer';

// shop component
function Shop() {
  return (
   <Wrapper class='shop-inner'>
      <ShopLayer />
   </Wrapper>
  )
}

export default Shop;