import axios from 'axios';

// get products action
export const getProducts = () => async (dispatch) => {
   const { data } = await axios.get('http://localhost:7000/products');

   dispatch({
      type: 'GET_PRODUCTS',
      payload: data
   })
}

// show alert action
export const showAlert = (datas) => async (dispatch) => {
   await axios.post('http://localhost:7000/newsletter_users', datas)
      .then((response) => {
         if(response.status == 200 || response.status == 201) {
            dispatch({
               type: 'SHOW_ALERT',
            })
         }
      })
} 

// hide alert action
export const hideAlert = () => async (dispatch) => {
   dispatch({
      type: 'HIDE_ALERT',
   })
} 