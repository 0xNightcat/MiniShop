// reducer

// initial state
const initialState = {
   products: [],
   alertShow: false,
   loader: false
}

// home reducer (state handler)
export const publicReducer = (state = initialState, action) => {
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
      case 'SHOW_LOADER':
         return {
            ...state,
            loader: true,
      }
      case 'HIDE_LOADER':
         return {
            ...state,
            loader: false,
      }
      
      default:
         return state;
   }
}