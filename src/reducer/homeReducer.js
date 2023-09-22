const initialState = {
   products: []
}

// home reducer (state handler)
export const homeReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'GET_PRODUCTS':
         return {
            ...state,
            products: action.payload
         }
      default:
         return state;
   }
}