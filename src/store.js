// with thunk into applyMiddleware can dispatching actions asynchronously

import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { homeReducer } from './reducer/homeReducer';

const reducer = combineReducers({
   home: homeReducer
}) 

const initialState = {

}

const middleware = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;
