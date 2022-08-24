import permission  from '../interfaces/permission/permissionActionType';
import {permissionInfo} from '../interfaces/info';
import {permissionActionType } from '../actionTypes/actions';


export const add = (payload: permissionInfo): permission.add => {
 
    return { type: permissionActionType.ADD_PERMISSION , payload }
  }

  export const update = (payload: permissionInfo): permission.update => {
 
    return { type: permissionActionType.UPDATE_PERMISSION , payload }
  }
  export const loadAdminData = (payload: permissionInfo[]): permission.loadDataAdmin => {
   
    return { type: permissionActionType.ADMIN_PERMISSIONS, payload }
  }


  export const loadData = (payload: permissionInfo[]): permission.loadData => {
   
    return { type: permissionActionType.USER_PERMISSIONS , payload }
  }



  export const deleteData = (payload: permissionInfo): permission.deleteData => {
   
    return { type: permissionActionType.DELETE_PERMISSION , payload }
  }


  
  export const loadPermission = (payload: permissionInfo): permission.loadPermission => {

    return { type: permissionActionType.PERMISSION , payload }
  }

  
  
