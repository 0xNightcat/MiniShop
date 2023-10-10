import './CheckoutMain.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import CartInfo from './CartInfo/CartInfo';
import { useSelector } from 'react-redux';

// checkout main component
function CheckoutMain() {
   const cartReducer = useSelector((state) => state.cart);
   const { totalPrice, cartProducts } = cartReducer;

  return (
    <Wrapper class='checkout-main'>
      <Row className='justify-content-between'>
         <Col md={6}>
            <UserInfo />
         </Col>
         <Col md={5}>
            <CartInfo total={totalPrice} count={cartProducts.length} />
         </Col>
         <hr className='mt-2' />
         <div className='checkout-btns'>
            <Button className='btn-pay btn-success'>ثبت نهایی سفارش</Button>
            <Link to='/cart'>
               <Button className='btn-return btn-secondary'>بازشگت به سبد</Button>
            </Link>
         </div>
      </Row>
    </Wrapper>
  )
}

export default CheckoutMain;