import axios from 'axios';

// home actions
export const homeAction = () => async (dispatch) => {
   const { data } = await axios.get('http://localhost:7000/products');

   dispatch({
      type: 'GET_PRODUCTS',
      payload: data
   })
}

// home actions
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

// home actions
export const hideAlert = () => async (dispatch) => {
   dispatch({
      type: 'HIDE_ALERT',
   })
} 