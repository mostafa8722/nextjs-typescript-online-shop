import user  from '../interfaces/user/userActionType';
import userInfo from '../interfaces/user/userInfo';
import actionType from '../actionTypes/user'


export const add = (payload: userInfo): user.Login => {
    console.log("tt",payload)
    return { type: actionType.USER_LOGIN , payload }
  }