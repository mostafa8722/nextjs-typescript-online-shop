import category  from '../interfaces/category/categoryActionType';
import {categoryInfo} from '../interfaces/info';
import {categoryActionType } from '../actionTypes/actions';


export const add = (payload: categoryInfo): category.add => {
 
    return { type: categoryActionType.ADD_CATEGORY , payload }
  }
  export const loadData = (payload: categoryInfo[]): category.loadDataAdmin => {
   
    return { type: categoryActionType.ADMIN_CATEGORIES , payload }
  }
  export const loadData2 = (payload: categoryInfo[]): category.loadDataAdmin2 => {
   
    return { type: categoryActionType.ADMIN_CATEGORIES2 , payload }
  }

  export const loadData3 = (payload: categoryInfo[]): category.loadDataAdmin3 => {

    return { type: categoryActionType.ADMIN_CATEGORIES3 , payload }
  }

  
  export const loadCategory = (payload: categoryInfo): category.loadCategory => {

    return { type: categoryActionType.CATEGORY , payload }
  }

  
  
