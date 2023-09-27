
// cart product action
export const updateCart = (id) => async (dispatch, getState) => {
   const products = getState().shop.products;

   let cartItem = products.filter((item) => item.id == id);

   dispatch({
      type: 'UPDATE_CART',
      payload: cartItem[0]
   })
}