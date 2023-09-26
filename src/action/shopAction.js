import axios from 'axios';

// get products action
export const getProducts = () => async (dispatch) => {
   const { data } = await axios.get('http://localhost:7000/products');

   dispatch({
      type: 'GET_PRODUCTS',
      payload: data
   })
}

// // search filter products
export const searchedProducts = (value) => async (dispatch, getState) => {
   const products = getState().public.products;


   let foundProducts = products.filter((item) => {
      return (
         item.name.indexOf(value) !== -1
      )
   })

   dispatch({
      type: 'SEARCHED_PRODUCTS',
      payload: foundProducts,
   })
}