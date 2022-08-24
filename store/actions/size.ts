import size  from '../interfaces/size/sizeActionType';
import {sizeInfo} from '../interfaces/info';
import {sizeActionType } from '../actionTypes/actions';


export const add = (payload: sizeInfo): size.add => {
 
    return { type: sizeActionType.ADD_SIZE , payload }
  }

  export const update = (payload: sizeInfo): size.update => {
 
    return { type: sizeActionType.UPDATE_SIZE , payload }
  }
  export const loadAdminData = (payload: sizeInfo[]): size.loadDataAdmin => {
   
    return { type: sizeActionType.ADMIN_SIZES, payload }
  }


  export const loadData = (payload: sizeInfo[]): size.loadData => {
   
    return { type: sizeActionType.USER_SIZES , payload }
  }



  export const deleteData = (payload: sizeInfo): size.deleteData => {
   
    return { type: sizeActionType.DELETE_SIZE , payload }
  }


  
  export const loadSize = (payload: sizeInfo): size.loadSize => {

    return { type: sizeActionType.SIZE , payload }
  }

  
  
