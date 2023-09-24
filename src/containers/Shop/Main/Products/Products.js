import './Products.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Container, Row, Col, Form, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Product from './Product/Product';
import { getProducts } from '../../../../action/publicAction';

// products component
function Products() {
   const dispatch = useDispatch();

   const publicReducer = useSelector((state) => state.public);
   const { products } = publicReducer;

   useEffect(() => {
      dispatch(getProducts());
   }, [])

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
            <Product pros={products} />

            <Pagination dir='ltr' className='mt-5 justify-content-center'>
               <Pagination.Prev />
               <Pagination.Item>4</Pagination.Item>
               <Pagination.Item>3</Pagination.Item>
               <Pagination.Item>2</Pagination.Item>
               <Pagination.Item active>1</Pagination.Item>
               <Pagination.Next />
            </Pagination>
         </div>
      </Container>
    </Wrapper>
  )
}

export default Products;