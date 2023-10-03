import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Shop from './containers/Shop/Shop';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import Product from './containers/Product/Product';
import Favorites from './containers/Favorites/Favorites';
import { ScrollToTop } from './components/UI/ScrollToTop/ScrollToTop';
import { fetchProducts } from './action/cartAction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// app component (main)
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/shop' Component={Shop} />
            <Route path='/cart' Component={Cart} />
            <Route path='/checkout' Component={Checkout} />
            <Route path='/product/:id' Component={Product} />
            <Route path='/favorites' Component={Favorites} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App;