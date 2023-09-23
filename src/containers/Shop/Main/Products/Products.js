import './Products.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Product from './Product/Product';

// products component
function Products() {
  return (
    <Wrapper class='shop-products'>
      <Container>
         <div className='top-row'>
            <Row className='justify-content-between align-items-center'>
               <Col md={5}>
                  <div className='search'>                  
                     <Form.Label>جستجوی محصول:</Form.Label>
                     <Form.Control type='text' />
                     <i className='fa fa-search'></i>
                  </div>
               </Col>
               <Col md={2}>
                  <div className='sort'>
                     <div className='sort-by'>
                        <Form.Label>مرتب سازی:</Form.Label>
                        <Form.Select size='sm'>
                           <option>مرتب سازی</option>
                           <option value='1'>گرانترین</option>
                           <option value='2'>ارزان ترین</option>
                           <option value='3'>جدید ترین</option>
                        </Form.Select>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
         <div className='pros-row'>
         <Product />
         </div>
      </Container>
    </Wrapper>
  )
}

export default Products;