import product  from '../interfaces/product/productActionType';
import {productInfo} from '../interfaces/info';
import {productActionType } from '../actionTypes/actions';


export const add = (payload: productInfo): product.add => {
    console.log("tt",payload)
    return { type: productActionType.ADD_PRODUCT , payload }
  }