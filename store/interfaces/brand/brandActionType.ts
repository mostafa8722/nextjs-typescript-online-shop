import {brandActionType} from '../../actionTypes/actions'
import { brandInfo } from '../info'; 

export namespace role {

    export interface add {
        type: brandActionType.ADD_BRAND;
        payload: brandInfo;
    }

    export interface update {
        type: brandActionType.UPDATE_BRAND;
        payload: brandInfo;
    }

    export interface loadDataAdmin {
        type: brandActionType.ADMIN_BRANDS;
        payload: brandInfo[];

    }
    
    export interface loadData {
        type: brandActionType.USER_BRANDS;
        payload: brandInfo[];

    } export interface deleteData {
        type: brandActionType.DELETE_BRAND;
        payload: brandInfo;

    }
    export interface loadBrand {
        type: brandActionType.BRAND;
        payload: brandInfo;
    }

}

export default role;
