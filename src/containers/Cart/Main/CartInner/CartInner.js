import './CartInner.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartTable from '../CartInner/CartTable/CartTable';
import CartInfo from './CartInfo/CartInfo';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../../../action/cartAction';

// cart content component
function CartInner() {
   const dispatch = useDispatch();

   const cartReducer = useSelector((state) => state.cart);
   let { cartProducts } = cartReducer;
   let { totalPrice } = cartReducer;

   // remove product from cart
   const removeProductFromCart = (id) => {
      dispatch(deleteProduct(id));
   }

  return (
    <Wrapper class='cart-in'>
      <Container>
         <Row>
            <Col md={9}>
               <div className='cart-items'>
                  {
                     cartProducts.length == 0 ? <h5 className='text-center'>سبد شما خالی می باشد</h5> : <CartTable pros={cartProducts} removePro={removeProductFromCart} />
                  }
               </div>
            </Col>
            <Col md={3}>
               <div className='cart-info'>
                  <CartInfo totalPrice={totalPrice} />
               </div>
            </Col>
         </Row>
      </Container>
    </Wrapper>
  )
}

export default CartInner;