import axios from 'axios';

// cart product action
export const updateCart = (id) => async (dispatch, getState) => {
   const products = getState().shop.products;

   const hideAlert = () => {
      setTimeout(() => {
         dispatch({ type: 'HIDE_ALERT' })
      }, 1400)
   }

   const miniAlertElement = document.querySelector('.mini-alert p');

   let cartItem = products.filter((item) => item.id === id);

   await axios.post(' http://localhost:7000/cart_products', cartItem[0])
      .then((response) => {
         miniAlertElement.textContent = 'محصول به سبد اضافه شد';
         miniAlertElement.parentElement.style.background = 'green';
         hideAlert();
      }).catch((error) => {
         miniAlertElement.textContent = 'محصول قبلا اضافه شده است';
         miniAlertElement.parentElement.style.background = 'red';
         hideAlert();
      })
   
   dispatch({
      type: 'UPDATE_CART',
      payload: cartItem[0]
   })
}

// update cart action
export const fetchProducts = () => async (dispatch) => {
   const { data } = await axios.get(' http://localhost:7000/cart_products');

   dispatch({
      type: 'FETCH_PRODUCTS',
      payload: data
   })
}