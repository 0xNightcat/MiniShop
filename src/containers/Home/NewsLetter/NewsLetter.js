import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './NewsLetter.scss';

import image from '../../../assets/images/newsletter.jpg';
import NewsLetterForm from './Form/NewsLetterForm';

function NewsLetter() {
  return (
    <section className='newsletter'>
      <Container>
         <h4>عضویت در خبرنامه</h4>
         <div className='newsletter-inner'>
            <Row>
               <Col md={4}>
                  <Image src={image} />
               </Col>
               <Col md={5}>
                  <NewsLetterForm />
               </Col>
            </Row>
         </div>
      </Container>
    </section>
  )
}

export default NewsLetter;