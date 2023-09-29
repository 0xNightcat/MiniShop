// reducer

// initial state
const initialState = {
   cartProducts: [],
   showAlert: false
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
            }).concat(product),
            showAlert: true
         }
      case 'HIDE_ALERT':
         return {
            ...state,
            showAlert: false
         }
      case 'FETCH_PRODUCTS':
         return {
            ...state,
            cartProducts: action.payload
      }
      
      default:
         return state;
   }
}