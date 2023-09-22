import './TrendProduct.scss';
import { Col, Card, Row } from 'react-bootstrap';

import MyButton from '../../../../../components/UI/Button/MyButton';
import image1 from '../../../../../assets/images/products/1.png';
// import image2 from '../../../../../assets/images/products/2.png';
// import image3 from '../../../../../assets/images/products/3.png';
// import image4 from '../../../../../assets/images/products/4.png';


function TrendProduct({ prods }) {
  return (
   <div className='mt-5'>
      <Row>
      {
         prods ? prods.map((product) => {
            return (
               <Col key={product.id} md={3}>
                  <Card className='text-center'>
                     <Card.Img src={image1}  className='m-auto' />
                     <Card.Title>{product.name}</Card.Title>
                     <Card.Body>
                        <div className='price'>
                           قیمت: <span>{product.price} تومان</span>
                        </div>
                        <div className='category'>
                           <span>{product.category}</span>
                        </div>
                        <MyButton class='add block mt-3'>مشاهده محصول</MyButton>
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