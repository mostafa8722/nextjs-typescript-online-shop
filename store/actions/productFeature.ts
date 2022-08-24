import feature  from '../interfaces/productFeature/featureActionType';
import {productFeatureInfo} from '../interfaces/info';
import {featureActionType } from '../actionTypes/actions';


export const add = (payload: productFeatureInfo): feature.add => {
 
    return { type: featureActionType.ADD_FEATURE , payload }
  }

  export const update = (payload: productFeatureInfo): feature.update => {
 
    return { type: featureActionType.UPDATE_FEATURE , payload }
  }
  export const loadAdminData = (payload: productFeatureInfo[]): feature.loadDataAdmin => {
   
    return { type: featureActionType.ADMIN_FEATURES, payload }
  }


  export const loadData = (payload: productFeatureInfo[]): feature.loadData => {
   
    return { type: featureActionType.USER_FEATURES , payload }
  }



  export const deleteData = (payload: productFeatureInfo): feature.deleteData => {
   
    return { type: featureActionType.DELETE_FEATURE , payload }
  }


  
  export const loadfeature = (payload: productFeatureInfo): feature.loadFeature => {

    return { type: featureActionType.FEATURE , payload }
  }

  
  
