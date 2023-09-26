// reducer

// initial state
const initialState = {
   product: {},
}

// product reducer (state handler)
export const productReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'GET_PRODUCT':
         return {
            ...state,
            product: action.payload
         }
      
      default:
         return state;
   }
}