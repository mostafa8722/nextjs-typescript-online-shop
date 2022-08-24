import {productActionType} from '../../actionTypes/actions'
import { productInfo } from '../info'; 

export namespace product {

    export interface add {
        type: productActionType.ADD_PRODUCT;
        payload: productInfo
    }
    export interface update {
        type: productActionType.UPDATE_PRODUCT;
        payload: productInfo
    }
  
   


    export interface loadDataAdmin {
        type: productActionType.ADMIN_PRODUCTS;
        payload: productInfo[];

    }
    
    export interface loadData {
        type: productActionType.USER_PRODUCTS;
        payload: productInfo[];

    } export interface deleteData {
        type: productActionType.DELETE_PRODUCT;
        payload: productInfo;

    }

    export interface loadAdminProduct {
        type: productActionType.ADMIN_PRODUCT;
        payload: productInfo;
    }
    export interface loadProduct {
        type: productActionType.USER_PRODUCT;
        payload: productInfo;
    }


}

export default product;
