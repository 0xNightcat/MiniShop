// reducer

// initial state
const initialState = {
   favoriteProducts: [],
   showModal: false,
   selectedProId: 0,
}

// favorite reducer (state handler)
export const favoriteReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'GET_FAVORITE_PRODUCTS':
         return {
            ...state,
            favoriteProducts: action.payload
         }
         case 'DELETE_FAV_PRODUCT':
            const delProduct = action.payload;
            return {
               ...state,
               cartProducts: [...state.favoriteProducts].filter(item => {
                  return item.id === delProduct.id ? item.remove : item
               })
         }
      case 'SHOW_MODAL':
         return {
            ...state,
            showModal: true
         }
      case 'HIDE_MODAL':
         return {
            ...state,
            showModal: false
         }
      case 'SET_PRO_ID':
         return {
            ...state,
            selectedProId: action.payload
         }
      
      default:
         return state;
   }
}