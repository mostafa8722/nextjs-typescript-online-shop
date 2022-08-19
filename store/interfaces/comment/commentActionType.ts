import {commentActionType} from '../../actionTypes/actions'
import { commentInfo } from '../info'; 

export namespace comment {

    export interface add {
        type: commentActionType.ADD_COMMENT;
        payload: commentInfo;
    }
  


}

export default comment;
