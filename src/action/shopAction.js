import axios from 'axios';

// get products action
export const getProducts = () => async (dispatch) => {
   const { data } = await axios.get('http://localhost:7000/products');

   dispatch({
      type: 'GET_PRODUCTS',
      payload: data
   })
}

// search filter products
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

// sort filter products
export const sortProducts = (id) => async (dispatch, getState) => {
   const products = getState().public.products;

   // sort products by more sale
   switch(id) {
      case 1:
         products.sort((a, b) => {
            if (a.price > b.price) {
               return -1;
            }
            return products
         });
         break
      case 2:
         products.sort((a, b) => {
            if (a.price < b.price) {
               return -1;
            }
            return products
         }) 
         break
      case 3:
         products.sort((a, b) => {
            if (a.date > b.date) {
               return -1;
            }
            return products
         });
         break
         
      default: 
         return 0
   }
   
   dispatch({
      type: 'SORT_PRODUCTS',
      payload: products,
   })
}