import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartInner from './CartInner/CartInner';

// cart main component
function Main() {
  return (
    <Wrapper class='cart-main'>
      <Container>
         <Breadcrumb dir='ltr'>
               <Breadcrumb.Item href='#' active>سبد خرید</Breadcrumb.Item>
               <Breadcrumb.Item><Link to='/'>خانه</Link></Breadcrumb.Item>
         </Breadcrumb>

         <CartInner />
      </Container>
    </Wrapper>
  )
}

export default Main;