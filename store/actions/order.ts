import order  from '../interfaces/order/orderActionType';
import {orderInfo} from '../interfaces/info';
import {orderActionType } from '../actionTypes/actions';


export const add = (payload: orderInfo): order.add => {
    console.log("tt",payload)
    return { type: orderActionType.ADD_ORDER , payload }
  }