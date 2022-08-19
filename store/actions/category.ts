import category  from '../interfaces/category/categoryActionType';
import {categoryInfo} from '../interfaces/info';
import {categoryActionType } from '../actionTypes/actions';


export const add = (payload: categoryInfo): category.add => {
    console.log("tt",payload)
    return { type: categoryActionType.ADD_CATEGORY , payload }
  }