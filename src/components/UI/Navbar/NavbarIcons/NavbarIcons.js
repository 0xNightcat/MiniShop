import './NavbarIcons.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { getProducts } from '../../../../action/shopAction';
import { incProductCount } from '../../../../action/cartAction';
import { decProductCount } from '../../../../action/cartAction';
import { deleteProduct } from '../../../../action/cartAction';
import { totalPriceCart } from '../../../../action/cartAction';
import { showLoader } from '../../../../action/productAction';
import { hideLoader } from '../../../../action/productAction';

// navbar icons comopnent
function NavbarIcons() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const cartReducer = useSelector((state) => state.cart);
  const { cartProducts } = cartReducer;
  const { totalPrice } = cartReducer;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(totalPriceCart());
 }, [dispatch, cartProducts, totalPrice])

  // increae product amount hanlder
  const incProductHandler = (id) => {
    dispatch(incProductCount(id));
  }

  // decreae product amount handler
  const decProductHandler = (id) => {
    dispatch(decProductCount(id));
  }

  // delete product handler
  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  }

  // prevent default action
  const preventDefauleAction = (event) => {
    event.preventDefault();
  }

  // apply cart
  const applyCart = () => {
    dispatch(showLoader());
    
    setTimeout(() => {
        dispatch(hideLoader());
      
      navigation('/cart');
    }, 1000);
  }
  

  return (
    <div className='nav-icons'>
      <div className='cart item'>
        <div className='dropdown'>
          <div id='drop-user' variant='none' className='border-0 dropbtn'>
            <span className='badge bg-danger'>{cartProducts.length}</span>
            <a href='!#' className='item' onClick={(event) => preventDefauleAction(event)}><i className='fa fa-shopping-cart'></i></a>
          </div>
          <div className='text-right drop-content'>
            <div className='cart-box'>
                <CartItem 
                pros={cartProducts} 
                incProduct={incProductHandler}
                decProduct={decProductHandler}
                delProduct={deleteProductHandler}
                />
              <div className='cart-box-bottom' style={
                cartProducts.length > 0 ? {'display':'block'} : {'display':'none'}
              }>
                <Button className='btn-cart bg-success border-0' onClick={applyCart}>
                  ثبت سفارش
                </Button>
                <div className='total-price'>
                  <p>مجموع قیمت:</p>
                  <p><span>{totalPrice}</span> تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='favorite item'>
        <Link to='/favorites'><i className='fa fa-heart'></i></Link>
      </div>
      <div className='dark-mode item'>
         <a href={(event) => preventDefauleAction(event)}><i className='fa fa-circle'></i></a>
      </div>
    </div>
  )
}

export default NavbarIcons;