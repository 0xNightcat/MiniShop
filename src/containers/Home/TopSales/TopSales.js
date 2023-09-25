import './TopSales.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Container, Row, Col, Image } from 'react-bootstrap';

// images
import image from '../../../assets/static/small_pros.jpg';

// top sales component
function TopSales() {
  return (
    <Wrapper class='top_sales mt-5'>
      <Container>
         <Row>
            <Col md={3}><a href='#'><Image src={image} /></a></Col>
            <Col md={3}><a href='#'><Image src={image} /></a></Col>
            <Col md={3}><a href='#'><Image src={image} /></a></Col>
            <Col md={3}><a href='#'><Image src={image} /></a></Col>
         </Row>
      </Container>
    </Wrapper>
  )
}

export default TopSales;