import {roleActionType} from '../../actionTypes/actions'
import { roleInfo } from '../info'; 

export namespace role {

    export interface add {
        type: roleActionType.ADD_ROLE;
        payload: roleInfo;
    }

    export interface update {
        type: roleActionType.UPDATE_ROLE;
        payload: roleInfo;
    }

    export interface loadDataAdmin {
        type: roleActionType.ADMIN_ROLES;
        payload: roleInfo[];

    }
    
    export interface loadData {
        type: roleActionType.USER_ROLES;
        payload: roleInfo[];

    } export interface deleteData {
        type: roleActionType.DELETE_ROLE;
        payload: roleInfo;

    }
    export interface loadRole {
        type: roleActionType.ROLE;
        payload: roleInfo;
    }

}

export default role;
