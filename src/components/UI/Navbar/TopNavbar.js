import './TopNavbar.scss';
import { Navbar, Nav, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarIcons from './NavbarIcons/NavbarIcons';

// images
import logo from '../../../assets/static/logo/logo.png';

// top navbar component
function TopNavbar() {
   window.addEventListener('wheel', () => {
      const navbar = document.querySelector('.navbar');
      if(document.documentElement.scrollTop > 100) {
         navbar.classList.add('sticky');
      }else if(document.documentElement.scrollTop < 500) {
         navbar.classList.remove('sticky');
      }
   });

  return (
   <Navbar>
      <Col md={4}>
         <div className='header-right-side header-item d-flex align-items-center'>
            <NavbarIcons />
         </div>
      </Col>
      <Col md={4}>
         <div className='header-menu header-item'>
            <Nav className='justify-content-center'>
               <Nav.Item><Link to='/'>خانه</Link></Nav.Item>
               <Nav.Item><Link to='/shop'>فروشگاه</Link></Nav.Item>
               <Nav.Item><Link to='/favorites'>علاقه مندی ها</Link></Nav.Item>
            </Nav>
         </div>
      </Col>
      <Col md={4}>
         <div className='header-logo header-item'>
            <Navbar.Brand>
               <Image src={logo} width='64px' alt='logo'/>
            </Navbar.Brand>
         </div>
      </Col>
   </Navbar>
  )
}

export default TopNavbar;