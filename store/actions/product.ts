import product  from '../interfaces/product/productActionType';
import {productInfo} from '../interfaces/info';
import {productActionType } from '../actionTypes/actions';



  export const add = (payload: productInfo): product.add => {
 
    return { type: productActionType.ADD_PRODUCT , payload }
  }

  export const update = (payload: productInfo): product.update => {
 
    return { type: productActionType.UPDATE_PRODUCT , payload }
  }
  export const loadAdminData = (payload: productInfo[]): product.loadDataAdmin => {
   
    return { type: productActionType.ADMIN_PRODUCTS, payload }
  }


  export const loadData = (payload: productInfo[]): product.loadData => {
   
    return { type: productActionType.USER_PRODUCTS , payload }
  }



  export const deleteData = (payload: productInfo): product.deleteData => {
   
    return { type: productActionType.DELETE_PRODUCT , payload }
  }


  
  export const loadProduct = (payload: productInfo): product.loadProduct => {

    return { type: productActionType.USER_PRODUCT , payload }
  }
