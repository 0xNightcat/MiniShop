import axios from 'axios';

// cart product action
export const updateCart = (id) => async (dispatch, getState) => {
   const products = getState().shop.products;

   const hideAlert = () => {
      setTimeout(() => {
         dispatch({ type: 'HIDE_ALERT' })
      }, 1000)
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
   const { data } = await axios.get('http://localhost:7000/cart_products');

   dispatch({
      type: 'FETCH_PRODUCTS',
      payload: data
   })
}

// increase product count action
export const incProductCount = (id) => async (dispatch, getState) => {
   const products = getState().public.products;
   const cartProducts = getState().cart.cartProducts;

   const prevProduct = products.filter((item) => item.id === id);
   const product = cartProducts.filter((item) => item.id === id);

   const basePrice = prevProduct[0].price;

   product[0].count += 1;
   product[0].price = product[0].count * basePrice;

   await axios.put(`http://localhost:7000/cart_products/${id}`, product[0]);

   dispatch({
      type: 'INC_COUNT',
      payload: product[0]
   })
}

// decrease product count action
export const decProductCount = (id) => async (dispatch, getState) => {
   const products = getState().public.products;
   const cartProducts = getState().cart.cartProducts;

   const prevProduct = products.filter((item) => item.id === id);
   const product = cartProducts.filter((item) => item.id === id);

   const basePrice = prevProduct[0].price;

   product[0].count -= 1;
   product[0].price = product[0].count * basePrice;

   await axios.put(`http://localhost:7000/cart_products/${id}`, product[0]);

   dispatch({
      type: 'DEC_COUNT',
      payload: product[0]
   })
}

// delete product action
export const deleteProduct = (id) => async (dispatch, getState) => {
   const products = getState().cart.cartProducts;

   const product = products.filter((item) => item.id === id);

   await axios.delete(`http://localhost:7000/cart_products/${id}`, product[0]);

   dispatch({
      type: 'DELETE_PRODUCT',
      payload: product[0]
   })
}

// total price action
export const totalPriceCart = () => async (dispatch, getState) => {       
   let data = await getState().cart.cartProducts;

   dispatch({
      type: 'TOTAL_PRICE',
      payload: data
   })
}
