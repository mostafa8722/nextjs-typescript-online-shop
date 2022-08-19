import comment  from '../interfaces/comment/commentActionType';
import {commentInfo} from '../interfaces/info';
import {commentActionType } from '../actionTypes/actions';


export const add = (payload: commentInfo): comment.add => {
    console.log("tt",payload)
    return { type: commentActionType.ADD_COMMENT , payload }
  }