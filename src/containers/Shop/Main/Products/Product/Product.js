import './Product.scss';
import Wrapper from '../../../../../hoc/Wrapper';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyButton from '../../../../../components/UI/Button/MyButton';

// images
import image1 from '../../../../../assets/images/products/7.png';
import image2 from '../../../../../assets/images/products/5.png';

// product component
function Product() {
  return (
   <Wrapper class='shop'>
      <Row>
         <Col md={3}>
            <Card className='text-center border-0'>
               <Link to='/product'>
                  <Card.Img src={image1}  className='m-auto' />
                  <Card.Title>هدفون مدل Tesco</Card.Title>
                  <Card.Body>
                     <div className='price'>
                        قیمت: <span>۲۵۰۰۰۰ تومان</span>
                     </div>
                     <div className='category'>
                        <span>Tech</span>
                     </div>
                  </Card.Body>
               </Link>
               <div className='btns'>
                  <MyButton class='shop-add mt-0 d-block w-100'>اضافه به سبد</MyButton>
               </div>
            </Card>
         </Col>
         <Col md={3}>
            <Card className='text-center border-0'>
               <Link to='/product'>
                  <Card.Img src={image2}  className='m-auto' />
                  <Card.Title>هدفون مدل Tesco</Card.Title>
                  <Card.Body>
                     <div className='price'>
                        قیمت: <span>۳۳۲۰۰۰۰ تومان</span>
                     </div>
                     <div className='category'>
                        <span>Tech</span>
                     </div>
                  </Card.Body>
               </Link>
               <div className='btns'>
                  <MyButton class='shop-add mt-0 d-block w-100'>اضافه به سبد</MyButton>
               </div>
            </Card>
         </Col>
      </Row>
   </Wrapper>
  )
}

export default Product;