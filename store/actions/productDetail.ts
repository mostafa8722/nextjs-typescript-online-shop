import detail  from '../interfaces/productDetail/detailActionType';
import {productDetailInfo} from '../interfaces/info';
import {detailActionType } from '../actionTypes/actions';


export const add = (payload: productDetailInfo): detail.add => {
 
    return { type: detailActionType.ADD_DETAIL , payload }
  }

  export const update = (payload: productDetailInfo): detail.update => {
 
    return { type: detailActionType.UPDATE_DETAIL , payload }
  }
  export const loadAdminData = (payload: productDetailInfo[]): detail.loadDataAdmin => {
   
    return { type: detailActionType.ADMIN_DETAILS, payload }
  }


  export const loadData = (payload: productDetailInfo[]): detail.loadData => {
   
    return { type: detailActionType.USER_DETAILS , payload }
  }



  export const deleteData = (payload: productDetailInfo): detail.deleteData => {
   
    return { type: detailActionType.DELETE_DETAIL , payload }
  }


  
  export const loaddetail = (payload: productDetailInfo): detail.loadDetail => {

    return { type: detailActionType.DETAIL , payload }
  }

  
  
