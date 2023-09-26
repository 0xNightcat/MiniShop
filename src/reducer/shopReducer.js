// reducer

// initial state
const initialState = {
   products: [],
}

// shop reducer (state handler)
export const shopReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'GET_PRODUCTS':
         return {
            ...state,
            products: action.payload
         }
      case 'SEARCHED_PRODUCTS':
         return {
            ...state,
            products: action.payload,
         }
      case 'SORT_PRODUCTS':
         return {
            ...state,
            products: action.payload,
         }
      
      default:
         return state;
   }
}