import brand  from '../interfaces/brand/brandActionType';
import {brandInfo} from '../interfaces/info';
import {brandActionType } from '../actionTypes/actions';


export const add = (payload: brandInfo): brand.add => {
 
    return { type: brandActionType.ADD_BRAND , payload }
  }

  export const update = (payload: brandInfo): brand.update => {
 
    return { type: brandActionType.UPDATE_BRAND , payload }
  }
  export const loadAdminData = (payload: brandInfo[]): brand.loadDataAdmin => {
   
    return { type: brandActionType.ADMIN_BRANDS, payload }
  }


  export const loadData = (payload: brandInfo[]): brand.loadData => {
   
    return { type: brandActionType.USER_BRANDS , payload }
  }



  export const deleteData = (payload: brandInfo): brand.deleteData => {
   
    return { type: brandActionType.DELETE_BRAND , payload }
  }


  
  export const loadbrand = (payload: brandInfo): brand.loadBrand => {

    return { type: brandActionType.BRAND , payload }
  }

  
  
