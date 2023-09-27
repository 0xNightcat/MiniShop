import './Products.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Container, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Product from './Product/Product';
import { getProducts } from '../../../../action/shopAction';
import { searchedProducts } from '../../../../action/shopAction';
import { sortProducts } from '../../../../action/shopAction';
import { updateCart } from '../../../../action/cartAction';
import Filters from './Filters/Filters';

// products component
function Products() {
   const dispatch = useDispatch();

   const shopReducer = useSelector((state) => state.shop);
   const { products } = shopReducer;

   const cartReducer = useSelector((state) => state.cart);
   const { cartProducts } = cartReducer;

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch])
   
   // search products handler
   const inputValueHandler = (event) => {
      const inputValue = event.target.value;

      dispatch(searchedProducts(inputValue))
   }

   // sort products handler
   const sortProductsFilter = (event) => {
      const sortItemId = Number(event.target.value);

      dispatch(sortProducts(sortItemId));
   }

   // add to car handler
   const addToCartHandler = (id) => {
      dispatch(updateCart(id));
   }
   

  return (
    <Wrapper class='shop-products'>
      <Container>
         <div className='top-row'>
            <Filters 
            input={(event) => inputValueHandler(event)} 
            sort={(event) => sortProductsFilter(event)}
            />
         </div>
         <div className='pros-row'>
            <Product addToCart={addToCartHandler} pros={products} />

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