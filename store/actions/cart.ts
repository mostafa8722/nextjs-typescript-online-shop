import cart  from '../interfaces/cart/cartActionType';
import {cartInfo} from '../interfaces/info';
import {cartActionType } from '../actionTypes/actions';


export const add = (payload: cartInfo): cart.add => {
   
    return { type: cartActionType.ADD_CART , payload }
  }