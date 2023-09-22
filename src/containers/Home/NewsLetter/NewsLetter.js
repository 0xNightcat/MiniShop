import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

import './NewsLetter.scss';

import image from '../../../assets/images/newsletter.jpg';

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
                  <Form>
                     <Form.Group>
                        <Form.Control type='text' placeholder='ایمیل' />
                        <Button className='btn btn-warning'>ثبت</Button>
                     </Form.Group>
                  </Form>
               </Col>
            </Row>
         </div>
      </Container>
    </section>
  )
}

export default NewsLetter;