import setting  from '../interfaces/setting/settingActionType';
import {settingInfo} from '../interfaces/info';
import {settingActionType } from '../actionTypes/actions';


export const add = (payload: settingInfo): setting.add => {
 
    return { type: settingActionType.ADD_SETTING , payload }
  }

  export const update = (payload: settingInfo): setting.update => {
 
    return { type: settingActionType.UPDATE_SETTING , payload }
  }
  export const loadAdminData = (payload: settingInfo[]): setting.loadDataAdmin => {
   
    return { type: settingActionType.ADMIN_SETTINGS, payload }
  }


  export const loadData = (payload: settingInfo[]): setting.loadData => {
   
    return { type: settingActionType.USER_SETTINGS , payload }
  }



  export const deleteData = (payload: settingInfo): setting.deleteData => {
   
    return { type: settingActionType.DELETE_SETTING , payload }
  }


  
  export const loadsetting = (payload: settingInfo): setting.loadSetting => {

    return { type: settingActionType.SETTING , payload }
  }

  
  
