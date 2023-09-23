import './NavbarIcons.scss';
import { Dropdown, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import cartImg from '../../../../assets/images/products/11.png';

// navbar icons comopnent
function NavbarIcons() {
  return (
    <div className='nav-icons'>
      <div className='cart item'>
      <Dropdown>
          <Dropdown.Toggle id='drop-user' variant='none' className='border-0'>
            <a href='#'><i className='fa fa-shopping-cart'></i></a>
          </Dropdown.Toggle>
          <Dropdown.Menu className='text-right'>
            <div className='cart-box'>
              <div className='cart-box-item'>
                  <div className='cart-image'>
                    <Image src={cartImg} />
                    <p className='cart-title'>عنوان محصول</p>
                  </div>
                  <div className='cart-number'>
                    <a href='#'><span className='inc'>+</span></a>
                    <span className='line'> | </span>
                    <a href='#'><span className='dec'>-</span></a>
                  </div>
                  <div className='cart-remove'>
                    <Button className='btn-remove border-0 py-1'>X</Button>
                  </div>
              </div>
              <div className='cart-box-bottom'>
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