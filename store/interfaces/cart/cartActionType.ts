import {cartActionType} from '../../actionTypes/actions'
import { cartInfo, orderInfo } from '../info'; 

export namespace order {

    export interface add {
        type: cartActionType.ADD_CART;
        payload: cartInfo;
    }
  


}

export default order;
