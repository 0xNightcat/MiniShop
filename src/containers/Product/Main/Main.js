import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Container } from 'react-bootstrap';
import ProductMain from './ProductMain/ProductMain';

// product main component
function Main() {
  return (
    <Wrapper class='product-main text-center'>
      <Container>
        <ProductMain />
      </Container>
    </Wrapper>
  )
}

export default Main;