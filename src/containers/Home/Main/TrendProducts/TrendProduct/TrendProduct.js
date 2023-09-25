import './TrendProduct.scss';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyButton from '../../../../../components/UI/Button/MyButton';


// trend product component
function TrendProduct({ prods }) {
  return (
   <div className='mt-5'>
      <Row>
      {
         prods ? prods.map((product) => {
            return (
               <Col key={product.id} md={3}>
                  <Card className='text-center'>
                     <Card.Img src={`${product.src}`}  className='m-auto' />
                     <Card.Title>{product.name}</Card.Title>
                     <Card.Body>
                        <div className='price'>
                           قیمت: <span>{product.price} تومان</span>
                        </div>
                        <div className='category'>
                           <span>{product.category}</span>
                        </div>
                        <Link to={`product/${product.id}`}>
                           <MyButton class='add block mt-3'>
                              مشاهده محصول   
                           </MyButton>
                        </Link>
                     </Card.Body>
                  </Card>
               </Col>
            )
         }) : null
      }
      </Row>
   </div>
  )
}

export default TrendProduct;