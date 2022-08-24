import {categoryActionType} from '../../actionTypes/actions'
import { categoryInfo } from '../info'; 

export namespace category {

    export interface add {
        type: categoryActionType.ADD_CATEGORY;
        payload: categoryInfo;
    }

    export interface loadDataAdmin {
        type: categoryActionType.ADMIN_CATEGORIES;
        payload: categoryInfo[];
    }

    export interface loadDataAdmin2 {
        type: categoryActionType.ADMIN_CATEGORIES2;
        payload: categoryInfo[];
    }
  
    export interface loadDataAdmin3 {
        type: categoryActionType.ADMIN_CATEGORIES3;
        payload: categoryInfo[];
    }

    export interface loadCategory {
        type: categoryActionType.CATEGORY;
        payload: categoryInfo;
    }

}

export default category;
