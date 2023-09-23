import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Container } from 'react-bootstrap';

// checkout main component
function Main() {
  return (
    <Wrapper class='checkout-main text-center'>
      <Container>
         <h2>Checkout</h2>
      </Container>
    </Wrapper>
  )
}

export default Main;