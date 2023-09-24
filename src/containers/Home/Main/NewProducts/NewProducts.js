import './NewProducts.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getProducts } from '../../../../action/publicAction';
import NewProduct from './NewProduct/NewProduct';

// new products component
function NewProducts() {
  const dispatch = useDispatch();
  
  // get states
  const publicReducer = useSelector((state) => state.public);
  const { products } = publicReducer;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  // sort products by more sale
  products.sort((a, b) => {
    if ( a.date > b.date ){
      return -1;
    }
    if ( a.date < b.date ){
      return 1;
    }
    return 0;
  });

  console.log(products);

  const newestPros = products.slice(0, 4); // limit products count

  return (
    <section className='new_products mt-5'>
      <Container>
         <h4 className='title text-center'>جدیدترین محصولات</h4>
            <NewProduct Newprods={newestPros} />
      </Container>
    </section>
  )
}

export default NewProducts;