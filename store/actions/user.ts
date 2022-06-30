import user  from '../interfaces/userActionType';
import userInfo from '../interfaces/userInfo';
import actionType from '../actionTypes/user'


export const login = (payload: userInfo): user.Login => {
    console.log("tt",payload)
    return { type: actionType.USER_LOGIN , payload }
  }