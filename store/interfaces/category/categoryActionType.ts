import {categoryActionType} from '../../actionTypes/actions'
import { categoryInfo } from '../info'; 

export namespace order {

    export interface add {
        type: categoryActionType.ADD_CATEGORY;
        payload: categoryInfo;
    }
  


}

export default order;
