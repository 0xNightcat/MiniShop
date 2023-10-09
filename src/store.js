// with thunk into applyMiddleware can dispatching actions asynchronously

import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers handle
import { publicReducer } from './reducer/publicReducer';
import { productReducer } from './reducer/productReducer';
import { shopReducer } from './reducer/shopReducer';
import { cartReducer } from './reducer/cartReducer';
import { favoriteReducer } from './reducer/favoriteReducer';

const reducer = combineReducers({
   public: publicReducer,
   product: productReducer,
   shop: shopReducer,
   cart: cartReducer,
   favorites: favoriteReducer
}) 

const initialState = {

}

const middleware = [thunk];

// store
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;
