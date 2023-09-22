import { Container } from 'react-bootstrap';

import './Main.scss';

import Wrapper from '../../../hoc/Wrapper';
import ProductMain from './ProductMain/ProductMain';

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