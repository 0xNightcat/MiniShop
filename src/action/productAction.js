import axios from 'axios';

// get product action
export const getProduct = (id) => async (dispatch) => {
   const { data } = await axios.get(`http://localhost:7000/products/${id}`);

   dispatch({
      type: 'GET_PRODUCT',
      payload: {
         name: data.name,
         price: data.price,
         cat: data.category,
         src: data.src
      }
   })
}

// show loader
export const showLoader = () => async (dispatch) => {
   dispatch({
      type: 'SHOW_LOADER'
   })
}

// hide loader
export const hideLoader = () => async (dispatch) => {
   dispatch({
      type: 'HIDE_LOADER'
   })
}