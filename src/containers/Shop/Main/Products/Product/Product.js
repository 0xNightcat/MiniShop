import './Product.scss';
import Wrapper from '../../../../../hoc/Wrapper';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyButton from '../../../../../components/UI/Button/MyButton';

// product component
function Product({ pros, addToCart }) {
  return (
   <Wrapper class='shop'>
      <Row>
         {
            pros ? pros.map((product) => {
               return (
                  <Col key={product.id} md={3}>
                     <Card className='text-center card-pro border-0'>
                        <Link to={`/product/${product.id}`}>
                           <Card.Img src={`${product.src}`}  className='m-auto' />
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
                           <MyButton class='shop-add mt-0 d-block w-100' click={() => addToCart(product.id)}>اضافه به سبد</MyButton>
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