import './Product.scss';
import Wrapper from '../../hoc/Wrapper';
import ProductLayer from '../../components/layers/ProductLayer';

// product component
function Product() {
  return (
    <Wrapper class='product-inner'>
      <ProductLayer />
    </Wrapper>
  )
}

export default Product;