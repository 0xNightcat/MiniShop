import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Wrapper from '../../../hoc/Wrapper';

import './TopSales.scss';

import image from '../../../assets/images/small_pros.jpg';

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