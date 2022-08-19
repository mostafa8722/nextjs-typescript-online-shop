import { combineReducers } from 'redux'

import userReducer from './type/userReducer'
import cartReducer from './type/cartReducer'
import categoryReducer from './type/categoryReducer'
import productReducer from './type/productReducer'
import commentReducer from './type/commentReducer'
import orderReducer from './type/orderReducer'


const reducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
  productReducer,
  commentReducer,
  orderReducer
})

// const reducer = combineReducers<cartState>({
//     cartReducer: cartReducer.cartReducer
// });

export default reducer;