import axios from 'axios';

// add favorite product action
export const addProductToFavorite = (id) => async (dispatch, getState) => {
   const products = getState().shop.products;

   const hideAlert = () => {
      setTimeout(() => {
         dispatch({ type: 'HIDE_WARN' })
      }, 1000)
   }

   const miniAlertElement = document.querySelector('.mini-alert p');

   let product = products.filter(item => item.id === id);

   await axios.post('http://localhost:7000/favorite_products', product[0])
      .then((response) => {
         dispatch({ type: 'SHOW_WARN' });
         miniAlertElement.textContent = 'محصول به علاقه مندی ها اضافه شد';
         miniAlertElement.parentElement.style.background = 'green';
         hideAlert();
      }).catch((error) => {
         dispatch({ type: 'SHOW_WARN' });
         miniAlertElement.textContent = 'محصول قبلا اضافه شده است';
         miniAlertElement.parentElement.style.background = 'red';
         hideAlert();
      }) 
}

// get favorite products action
export const getFavoriteProducts = () => async (dispatch) => {
   const { data } = await axios.get('http://localhost:7000/favorite_products');

   dispatch({
      type: 'GET_FAVORITE_PRODUCTS',
      payload: data
   })
}

// delete favorite product action
export const deleteFavoriteProduct = (id) => async (dispatch, getState) => {
   const products = getState().favorites.favoriteProducts;

   const product = products.filter((item) => item.id === id);

   await axios.delete(`http://localhost:7000/favorite_products/${id}`, product[0])

   dispatch({
      type: 'DELETE_FAV_PRODUCT',
      payload: product[0]
   })
}

// show modal action
export const showModalAction = () => async (dispatch) => {
   dispatch({
      type: 'SHOW_MODAL'
   })
}

// hide modal action
export const hideModalAction = () => async (dispatch) => {
   dispatch({
      type: 'HIDE_MODAL'
   })
}

// set id action
export const setProductId = (id) => async (dispatch) => {
   dispatch({
      type: 'SET_PRO_ID',
      payload: id
   })
}
