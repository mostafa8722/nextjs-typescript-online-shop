import { combineReducers } from 'redux'

import userReducer from './type/userReducer'
import cartReducer from './type/cartReducer'
import categoryReducer from './type/categoryReducer'
import productReducer from './type/productReducer'
import commentReducer from './type/commentReducer'
import orderReducer from './type/orderReducer'
import generalReducer from './type/generalReducer'
import colorReducer from './type/colorReducer'
import permissionReducer from './type/permissionReducer'
import sizeReducer from './type/sizeReducer'
import roleReducer from './type/roleReducer';
import bannerReducer from './type/bannerReducer';
import brandReducer from './type/brandReducer';
import settingReducer from './type/settingReducer';
import productFeatureReducer from './type/productFeatureReducer';
import productDetailReducer from './type/productDetailReducer';


const reducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
  productReducer,
  commentReducer,
  orderReducer,
  generalReducer,
  permissionReducer,
  roleReducer,
  sizeReducer,
  colorReducer,
  bannerReducer,
  brandReducer,
  settingReducer,
  productDetailReducer,
  productFeatureReducer,
})

// const reducer = combineReducers<cartState>({
//     cartReducer: cartReducer.cartReducer
// });

export default reducer;