import './TrendProducts.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getProducts } from '../../../../action/homeAction';
import TrendProduct from './TrendProduct/TrendProduct';

// trend products component
function TrendProducts() {
  const dispatch = useDispatch();
  
  // get states
  const home = useSelector((state) => state.home);
  const { products } = home;

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  // sort products by more sale
  products.sort((a, b) => {
    if ( a.sale_count > b.sale_count ){
      return -1;
    }
    if ( a.sale_count < b.sale_count ){
      return 1;
    }
    return 0;
  });

  const moreSalesPros = products.slice(0, 4); // limit products count

  return (
    <section className='trend_products mt-5'>
      <Container>
         <h4 className='title text-center'>پر فروش ترین محصولات</h4>
            <TrendProduct prods={moreSalesPros} />
      </Container>
    </section>
  )
}

export default TrendProducts;