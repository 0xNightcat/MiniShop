import './Header.scss';
import { Container, Row } from 'react-bootstrap';
import TopNavbar from '../UI/Navbar/TopNavbar';

// header component
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