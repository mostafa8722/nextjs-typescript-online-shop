import user  from '../interfaces/user/userActionType';
import {userInfo} from '../interfaces/info';
import { userActionType } from '../actionTypes/actions';


export const login = (payload: userInfo): user.Login => {
    console.log("tt",payload)
    return { type: userActionType.USER_LOGIN , payload }
  }