import './NavbarIcons.scss';
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';

// navbar icons comopnent
function NavbarIcons() {
  const cartReducer = useSelector((state) => state.cart);
  const { cartProducts } = cartReducer;


  return (
    <div className='nav-icons'>
      <div className='cart item'>
      <Dropdown>
          <Dropdown.Toggle id='drop-user' variant='none' className='border-0'>
            <a href='#'><i className='fa fa-shopping-cart'></i></a>
          </Dropdown.Toggle>
          <Dropdown.Menu className='text-right'>
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
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='dark-mode item'>
         <a href='#'><i className='fa fa-circle'></i></a>
      </div>
    </div>
  )
}

export default NavbarIcons;