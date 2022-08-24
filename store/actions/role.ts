import role  from '../interfaces/role/roleActionType';
import {roleInfo} from '../interfaces/info';
import {roleActionType } from '../actionTypes/actions';


export const add = (payload: roleInfo): role.add => {
 
    return { type: roleActionType.ADD_ROLE , payload }
  }

  export const update = (payload: roleInfo): role.update => {
 
    return { type: roleActionType.UPDATE_ROLE , payload }
  }
  export const loadAdminData = (payload: roleInfo[]): role.loadDataAdmin => {
   
    return { type: roleActionType.ADMIN_ROLES, payload }
  }


  export const loadData = (payload: roleInfo[]): role.loadData => {
   
    return { type: roleActionType.USER_ROLES , payload }
  }



  export const deleteData = (payload: roleInfo): role.deleteData => {
   
    return { type: roleActionType.DELETE_ROLE , payload }
  }


  
  export const loadRole = (payload: roleInfo): role.loadRole => {

    return { type: roleActionType.ROLE , payload }
  }

  
  
