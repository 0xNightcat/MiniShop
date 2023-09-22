import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Shop from './containers/Shop/Shop';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import Product from './containers/Product/Product';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/shop' Component={Shop} />
          <Route path='/cart' Component={Cart} />
          <Route path='/checkout' Component={Checkout} />
          <Route path='/product/:id?' Component={Product} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;