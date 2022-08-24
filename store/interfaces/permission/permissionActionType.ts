import {permissionActionType} from '../../actionTypes/actions'
import { permissionInfo } from '../info'; 

export namespace permission {

    export interface add {
        type: permissionActionType.ADD_PERMISSION;
        payload: permissionInfo;
    }

    export interface update {
        type: permissionActionType.UPDATE_PERMISSION;
        payload: permissionInfo;
    }

    export interface loadDataAdmin {
        type: permissionActionType.ADMIN_PERMISSIONS;
        payload: permissionInfo[];

    }
    
    export interface loadData {
        type: permissionActionType.USER_PERMISSIONS;
        payload: permissionInfo[];

    } export interface deleteData {
        type: permissionActionType.DELETE_PERMISSION;
        payload: permissionInfo;
    }
    export interface loadPermission {
        type: permissionActionType.PERMISSION;
        payload: permissionInfo;
    }

}

export default permission;
