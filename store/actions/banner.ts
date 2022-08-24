import banner  from '../interfaces/banner/bannerActionType';
import {bannerInfo} from '../interfaces/info';
import {bannerActionType } from '../actionTypes/actions';


export const add = (payload: bannerInfo): banner.add => {
 
    return { type: bannerActionType.ADD_BANNER , payload }
  }

  export const update = (payload: bannerInfo): banner.update => {
 
    return { type: bannerActionType.UPDATE_BANNER , payload }
  }
  export const loadAdminData = (payload: bannerInfo[]): banner.loadDataAdmin => {
   
    return { type: bannerActionType.ADMIN_BANNERS, payload }
  }


  export const loadData = (payload: bannerInfo[]): banner.loadData => {
   
    return { type: bannerActionType.USER_BANNERS , payload }
  }



  export const deleteData = (payload: bannerInfo): banner.deleteData => {
   
    return { type: bannerActionType.DELETE_BANNER , payload }
  }


  
  export const loadbanner = (payload: bannerInfo): banner.loadBanner => {

    return { type: bannerActionType.BANNER , payload }
  }

  
  
