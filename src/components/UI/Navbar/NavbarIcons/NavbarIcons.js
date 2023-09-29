import './NavbarIcons.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CartItem from './CartItem/CartItem';
import { getProducts } from '../../../../action/shopAction';

// navbar icons comopnent
function NavbarIcons() {
  const dispatch = useDispatch();

  const cartReducer = useSelector((state) => state.cart);
  const { cartProducts } = cartReducer;

  useEffect(() => {
    dispatch(getProducts());
 }, [dispatch])


  return (
    <div className='nav-icons'>
      <div className='cart item'>
        <div className='dropdown'>
          <div id='drop-user' variant='none' className='border-0 dropbtn'>
            <span className='badge bg-danger'>{cartProducts.length}</span>
            <a className='item'><i className='fa fa-shopping-cart'></i></a>
          </div>
          <div className='text-right drop-content'>
            <div className='cart-box'>
                <CartItem pros={cartProducts} />
              <div className='cart-box-bottom' style={
                cartProducts.length > 0 ? {'display':'block'} : {'display':'none'}
              }>
                <Button className='btn-clear bg-secondary border-0'>حذف همه</Button>
                <Link to='/cart'>
                  <Button className='btn-cart bg-success border-0'>سبد خرید</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='dark-mode item'>
         <a href='#'><i className='fa fa-circle'></i></a>
      </div>
    </div>
  )
}

export default NavbarIcons;