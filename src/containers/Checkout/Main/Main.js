import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';

// checkout main component
function Main() {
  return (
    <Wrapper class='checkout-main'>
      <Container>
        <Breadcrumb dir='ltr'>
            <Breadcrumb.Item href='#' active>تکمیل سفارش</Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/cart'>سبد خرید</Link></Breadcrumb.Item>
         </Breadcrumb>

         <h2 className='text-center mt-5'>تکمیل سفارش</h2>
      </Container>
    </Wrapper>
  )
}

export default Main;