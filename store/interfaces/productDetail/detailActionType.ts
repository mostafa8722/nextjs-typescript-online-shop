import {detailActionType} from '../../actionTypes/actions'
import { productDetailInfo } from '../info'; 

export namespace detail {

    export interface add {
        type: detailActionType.ADD_DETAIL;
        payload: productDetailInfo;
    }

    export interface update {
        type: detailActionType.UPDATE_DETAIL;
        payload: productDetailInfo;
    }

    export interface loadDataAdmin {
        type: detailActionType.ADMIN_DETAILS;
        payload: productDetailInfo[];

    }
    
    export interface loadData {
        type: detailActionType.USER_DETAILS;
        payload: productDetailInfo[];

    } export interface deleteData {
        type: detailActionType.DELETE_DETAIL;
        payload: productDetailInfo;

    }


    


   

    export interface loadDetail {
        type: detailActionType.DETAIL;
        payload: productDetailInfo;
    }

}

export default detail;
