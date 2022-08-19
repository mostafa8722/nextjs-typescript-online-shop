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
  


}

export default product;
