// reducer

// initial state
const initialState = {
   cartProducts: [],
}

// cart reducer (state handler)
export const cartReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'UPDATE_CART':
         const product = action.payload;
         return {
            ...state,
            cartProducts: [...state.cartProducts].filter(item => {
                  return item.id !== product.id
            }).concat(product)
         }
      
      default:
         return state;
   }
}