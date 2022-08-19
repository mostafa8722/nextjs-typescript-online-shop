import {orderActionType} from '../../actionTypes/actions'
import { orderInfo } from '../info'; 

export namespace order {

    export interface add {
        type: orderActionType.ADD_ORDER;
        payload: orderInfo;
    }

    export interface update {
        type: orderActionType.ADD_ORDER;
        payload: orderInfo;
    }
  


}

export default order;
