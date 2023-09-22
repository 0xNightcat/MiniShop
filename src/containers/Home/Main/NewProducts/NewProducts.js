import React from 'react';
import { Container } from 'react-bootstrap';

import './NewProducts.scss';

import TrendProduct from '../TrendProducts/TrendProduct/TrendProduct';

function TrendProducts() {
  return (
    <section className='new_products mt-5'>
      <Container>
         <h4 className='title text-center'>جدیدترین محصولات</h4>
            <TrendProduct />
      </Container>
    </section>
  )
}

export default TrendProducts;