// reducer

// initial state
const initialState = {
   cartProducts: [],
   totalPrice: 0,
   showAlert: false,
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
      case 'INC_COUNT':
         const incProduct = action.payload;
         return {
            ...state,
            cartProducts: [...state.cartProducts].filter(item => {
               return item.id === incProduct.id ? item = incProduct : item
            })
      }
      case 'DEC_COUNT':
         const decProduct = action.payload;
         return {
            ...state,
            cartProducts: [...state.cartProducts].filter(item => {
               return item.id === decProduct.id ? item = decProduct : item
            })
      }
      case 'DELETE_PRODUCT':
         const delProduct = action.payload;
         return {
            ...state,
            cartProducts: [...state.cartProducts].filter(item => {
               return item.id === delProduct.id ? item.remove : item
            })
      }
      case 'CLEAR_CART':
         return {
            ...state,
            cartProducts: []
         }
      case 'TOTAL_PRICE':
         return {
            ...state,
            totalPrice: action.payload.reduce((res, item) => {
               return res + parseInt(item.price)
            }, 0)
         }
      
      default:
         return state;
   }
}