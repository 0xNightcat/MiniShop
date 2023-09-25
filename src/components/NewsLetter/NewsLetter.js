import './NewsLetter.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NewsLetterForm from './Form/NewsLetterForm';

// images
import image from '../../assets/static/newsletter.jpg';

// newsletter component
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