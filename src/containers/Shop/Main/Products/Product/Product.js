import './Product.scss';
import Wrapper from '../../../../../hoc/Wrapper';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyButton from '../../../../../components/UI/Button/MyButton';

// images
import image1 from '../../../../../assets/images/products/7.png';

// product component
function Product({ pros }) {
  return (
   <Wrapper class='shop'>
      <Row>
         {
            pros ? pros.map((product) => {
               return (
                  <Col key={product.id} md={3}>
                     <Card className='text-center border-0'>
                        <Link to='/product'>
                           <Card.Img src={image1}  className='m-auto' />
                           <Card.Title>{product.name}</Card.Title>
                           <Card.Body>
                              <div className='price'>
                                 قیمت: <span>{product.price} تومان</span>
                              </div>
                              <div className='category'>
                                 <span>{product.category}</span>
                              </div>
                           </Card.Body>
                        </Link>
                        <div className='btns'>
                           <MyButton class='shop-add mt-0 d-block w-100'>اضافه به سبد</MyButton>
                        </div>
                     </Card>
                  </Col>
               )
            }) : null
         }
      </Row>
   </Wrapper>
  )
}

export default Product;