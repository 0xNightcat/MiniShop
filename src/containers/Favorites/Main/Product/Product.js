import './Product.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// favorite product component
function Product({ pros, setProId }) {
  return (
   <Wrapper class='favorite-product'>
      <Row>
         {
            pros ? pros.map(product => {
               return (
                  <Col key={product.id} md={3}>
                     <Card className='text-center'>
                     <Link to={`/product/${product.id}`}>
                        <Card.Img src={`${product.src}`}  className='m-auto' />
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Body>
                           <div className='price text-center'>
                              قیمت: <span>{product.price} تومان</span>
                           </div>
                        </Card.Body>
                     </Link>
                     <Button onClick={() => setProId(product.id)}>حذف <i className='fa fa-trash'></i></Button>
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