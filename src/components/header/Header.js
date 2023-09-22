import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './Header.scss';

import TopNavbar from '../UI/Navbar/TopNavbar';

function Header() {  
  return (
    <header className='header'>
      <Container fluid className='text-center'>
         <Row className='align-items-center'>
            <TopNavbar />
         </Row>
      </Container>
    </header>
  )
}

export default Header;