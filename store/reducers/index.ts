import { combineReducers } from 'redux'

import userReducer from './type/userReducer'
import cartReducer from './type/cartReducer'
import categoryReducer from './type/categoryReducer'
import productReducer from './type/productReducer'
import commentReducer from './type/commentReducer'
import orderReducer from './type/orderReducer'
import generalReducer from './type/generalReducer'


const reducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
  productReducer,
  commentReducer,
  orderReducer,
  generalReducer
})

// const reducer = combineReducers<cartState>({
//     cartReducer: cartReducer.cartReducer
// });

export default reducer;