const initialState = {
   products: [],
   alertShow: false,
}

// home reducer (state handler)
export const homeReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'GET_PRODUCTS':
         return {
            ...state,
            products: action.payload
         }
      case 'SHOW_ALERT':
         return {
            ...state,
            alertShow: true,
      }
      case 'HIDE_ALERT':
         return {
            ...state,
            alertShow: false,
      }
      
      default:
         return state;
   }
}