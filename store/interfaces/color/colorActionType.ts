import {colorActionType} from '../../actionTypes/actions'
import { colorInfo } from '../info'; 

export namespace color {

    export interface add {
        type: colorActionType.ADD_COLOR;
        payload: colorInfo;
    }

    export interface update {
        type: colorActionType.UPDATE_COLOR;
        payload: colorInfo;
    }

    export interface loadDataAdmin {
        type: colorActionType.ADMIN_COLORS;
        payload: colorInfo[];

    }
    
    export interface loadData {
        type: colorActionType.USER_COLORS;
        payload: colorInfo[];

    } export interface deleteData {
        type: colorActionType.DELETE_COLOR;
        payload: colorInfo;

    }

    export interface loadColor {
        type: colorActionType.COLOR;
        payload: colorInfo;
    }

}

export default color;
