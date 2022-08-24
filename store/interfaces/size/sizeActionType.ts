import {sizeActionType} from '../../actionTypes/actions'
import { sizeInfo } from '../info'; 

export namespace size {

    export interface add {
        type: sizeActionType.ADD_SIZE;
        payload: sizeInfo;
    }

    export interface update {
        type: sizeActionType.UPDATE_SIZE;
        payload: sizeInfo;
    }

    export interface loadDataAdmin {
        type: sizeActionType.ADMIN_SIZES;
        payload: sizeInfo[];

    }
    
    export interface loadData {
        type: sizeActionType.USER_SIZES;
        payload: sizeInfo[];

    } export interface deleteData {
        type: sizeActionType.DELETE_SIZE;
        payload: sizeInfo;

    }


    


   

    export interface loadSize {
        type: sizeActionType.SIZE;
        payload: sizeInfo;
    }

}

export default size;
