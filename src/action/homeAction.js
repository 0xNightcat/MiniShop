import axios from 'axios';

// home actions
export const homeAction = () => async (dispatch) => {
   const { data } = await axios.get('http://localhost:7000/products');

   dispatch({
      type: 'GET_PRODUCTS',
      payload: data
   })
}